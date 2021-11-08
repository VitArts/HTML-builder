const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;
const file = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(file);

stdout.write('Привет! Введите текст.\n');

stdin.on('data', (data) => {
  let dataString = data.toString().trim();

  if (dataString == 'exit') {
    exitProcess();
  } else {
    output.write(data);
  }
});

function exitProcess() {
  stdout.write('Спасибо! Отличная работа!');
  process.exit();
}

process.on('SIGINT', exitProcess);