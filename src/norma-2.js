
console.log("**********Norma-2***********");
let number = prompt("Hi! Enter please, three-digit number.", 123);

number = number.split("").reverse().join("");
console.log(number);

//Крок 1. Використовуємо метод split(), щоб отримати масив з рядка
//Крок 2. Використовуємо метод reverse(), щоб перевернути елементи в отриманому масиві
//Крок 3. Використовуємо метод join(), щоб з'єднати елементи масиву
//Крок 4. Повертаємо перевернутий рядок
