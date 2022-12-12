
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




console.log("**********Minimum-2***********");
let c = "1";
let d = 2;
let sum1 = +c + d;
console.log(sum1); //3
console.log(typeof sum1); //number




console.log("**********Minimum-3***********");
let storage = prompt("Hi! Enter flash-storage capacity, GB", 64);
let numberFiles = Math.floor((storage * 1024) / 820);
console.log(`<${numberFiles}> file(s) fit on flash-storage.`);



console.log("**********Norma-1***********");
let money = prompt("Hi! Enter please, how much money do you have?, ₴", 75);
let costChocolate = prompt("Enter please, how much money chocolate cost, ₴", 35);

let canBuyChocolateFloat = money / costChocolate;
let canBuyChocolateInteger = Math.floor(money / costChocolate);
let change = money - canBuyChocolateInteger * costChocolate;

console.log(`Your can buy: ${canBuyChocolateInteger} chocolate(s).`);
console.log(`Your change is: ${change.toFixed(2)} ₴.`);


console.log("**********Norma-2***********");
let number = prompt("Hi! Enter please, three-digit number.", 123);

number = number.split("").reverse().join("");
console.log(number);


//Шаг 1. Используем метод split(), чтобы получить массив из строки
//Шаг 2. Используем метод reverse(), чтобы перевернуть элементы в полученном массиве
//Шаг 3. Используем метод join(), чтобы соединить элементы массива
//Шаг 4. Возвращаем перевернутую строку

console.log("**********Maximum-1***********");
let deposit = prompt("Hi! Enter the deposit amount, ₴", 7000);
let term = prompt("Enter term of deposit, month(s)", 3);
const rateMonth = 5 / 12;

let income = deposit * rateMonth / 100 * term;
console.log(`Your income is: ${income.toFixed(2)} ₴.`);


console.log("**********Maximum-2***********");
console.log(2 || 0 || 3); //2
console.log(2 && 0 && 3);//0
console.log(2 && 0 || 3);//3


//1e308 - number
//1e309 - Infinity
/* let num = 1e309;
console.log(num);
console.log(typeof num); */
