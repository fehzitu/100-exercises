// 4. Take user input and display it.

// import a rl module to use cli
const readline = require('readline');

// create a interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create an input with arrow function
rl.question('Input something: ', (val) => {
  // show the input value
  console.log(val);
  rl.close();
});