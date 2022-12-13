
console.log("**********Minimum-1***********");
let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(typeof sum.toFixed(1)); //string
console.log(typeof +sum.toFixed(1)); //number
console.log(typeof Number(sum.toFixed(1))); //number
console.log(+sum.toFixed(17)); //0.30000000000000004
console.log(+sum.toFixed(1)); //0.3
console.log(Math.round(sum)); //0
console.log(Math.floor(sum)); //0
console.log(Math.ceil(sum)); //1