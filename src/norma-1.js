
console.log("**********Norma-1***********");
let money = prompt("Hi! Enter please, how much money do you have?, ₴", 75);
let costChocolate = prompt("Enter please, how much money chocolate cost, ₴", 35);

let canBuyChocolateFloat = money / costChocolate;
let canBuyChocolateInteger = Math.floor(money / costChocolate);
let change = money - canBuyChocolateInteger * costChocolate;

console.log(`Your can buy: ${canBuyChocolateInteger} chocolate(s).`);
console.log(`Your change is: ${change.toFixed(2)} ₴.`);
