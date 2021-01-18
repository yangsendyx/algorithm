#!/usr/bin/env node

const program = require('commander');
const child_process = require('child_process');
const spawn = child_process.spawn;
const exec = child_process.exec;
const execSync = child_process.execSync;
const Logger = require('log4js').getLogger();
const fs = require('fs');

const buildBase = './03/build/';
const javaBase = './03/java/';
const cppBase = './01/cpp/';
const jsBase = './03/js/';

program
.usage('<name> [js]')
.description('编译[c++|java]程序并执行, name 参数为 [cpp|java] 文件名称或路径，基于 [cpp|java] 目录，js 参数为是否同时执行 javascript 版本')
.option('-j, --justJS', '仅执行js版本')
.action((name, js, options) => {
    const execJs = typeof js === 'string';
    if( !options && typeof js === 'object' ) options = js;
    
	// const path = `${cppBase}${name}.cpp`;
    const path = `${javaBase}${name}.java`;
	const jsPath = `${jsBase}${name}.js`;
	const buildPath = `${buildBase}${name}`;

    if( !fs.existsSync(path) ) return Logger.error(`name 参数错误，文件不存在，输入位置: ${path}`);
    if( execJs && !fs.existsSync(jsPath) ) return Logger.error(`js 文件不存在，输入位置: ${jsPath}`);

    const cppExec = () => {
        const command = ['-Wall', '-o', buildPath, path];
        const cmd = spawn('g++', command, { stdio: 'inherit' });
        cmd.on('close', code => {
            if( code ) return;
            Logger.info('c++ 执行:');
            const cpp = spawn(buildPath, { stdio: 'inherit' });
            cpp.on('close', code => !code && execJs && jsExec());
        });
    };

    const javaExec = () => {
        const _exec = () => {
            Logger.info('java 执行:');
            const java = exec(`cd ${buildBase} && java ${name}`, (err, sOut, sErr) => {
                if( err || sErr ) {
                    console.error('stderr', sErr);
                    console.error('error', err);
                    return;
                }
                console.log(sOut);
                execJs && jsExec();
            });
        };
        exec(`cd ${javaBase} && javac ${name}.java -d ../build/ -Xlint:unchecked`, (error, stdout, stderr) => {
            if( error || stderr ) return console.error(error || stderr);
            _exec();
        });
    };

    const jsExec = () => {
        Logger.info('js 执行:');
        const js = spawn('node', [jsPath], { stdio: 'inherit' });
        js.on('close', code => console.log(''));
    };

    if( options && options.justJS ) {
        jsExec();
    } else {
        // cppExec();
        javaExec();
    }
});

program.parse(process.argv);

