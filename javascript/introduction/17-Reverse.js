// 17. Reverse a string.

let str = 'Hello, world!';
// When we use .split() passing empty '' as an argument it creates an array where each character becomes an item in the array, then when we use .reverse it reverses the sequence and after that using .join() also with empty '' it creates a string with the items in the array
let res = str.split('').reverse().join('');

// show res
console.log(res);