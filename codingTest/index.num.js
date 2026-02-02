let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = data[0];
let b = data[1];

let _x1 = b[2];
console.log(Number(a) * Number(_x1));
let _x2 = b[1];
console.log(Number(a) * Number(_x2));
let _x3 = b[0];
console.log(Number(a) * Number(_x3));

console.log(Number(a) * Number(b));
