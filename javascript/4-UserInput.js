// 4- Take user input and display it.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input something: ', (val) => {
  console.log(val);
  rl.close();
});