
console.log("**********Maximum-1***********");
let deposit = prompt("Hi! Enter the deposit amount, ₴", 7000);
let term = prompt("Enter term of deposit, month(s)", 3);

const rateMonth = 5 / 12;

let income = deposit * rateMonth / 100 * term;
console.log(`Your income is: ${income.toFixed(2)} ₴.`);
