const fs = require('fs');
const readline = require('readline');

module.exports = async path => new Promise((resolve, reject) => {
	try {
		const words = [];
		const rs = fs.createReadStream(path);
		const rl = readline.createInterface({ input: rs });
		const cb = line => line.split(/\s+/g).forEach(item => (
				!!item && item.split(/[^a-zA-Z]/g).forEach(word => (
					!!word && words.push(word.toLocaleLowerCase())
				))
			)
		);

		rl.on('line', cb);
		rl.on('close', () => resolve(words));
	} catch(err) {
		console.error('FileOperation error: \n', err);
		resolve(false);
	}
});
