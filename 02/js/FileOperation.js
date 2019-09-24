const fs = require('fs');
const readline = require('readline');

module.exports = async path => new Promise((resolve, reject) => {
	try {
		const words = [];
		const rs = fs.createReadStream(path);
		const rl = readline.createInterface({ input: rs });
		const cb = line => {
			const list = line.split(/\s+/g);
			list.forEach(item => {
				if( !item ) return;
				const arr = item.split(/[^a-zA-Z]/g);
				if( !arr.length ) return;
				
				arr.forEach(word => {
					if( !word ) return;
					words.push( word.toLocaleLowerCase() );
				});
			});
		};

		rl.on('line', cb);
		rl.on('close', () => resolve(words));
	} catch(err) {
		console.error('FileOperation error: \n', err);
		resolve(false);
	}
});
