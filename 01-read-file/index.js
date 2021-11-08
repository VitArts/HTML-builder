
const fs = require('fs');
const file = fs.createReadStream(`${__dirname}/text.txt`, 'utf8');

file.on('data', (chunk) => {
	console.log(chunk);
})