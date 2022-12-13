
console.log("**********Minimum-3***********");
let storage = prompt("Hi! Enter flash-storage capacity, GB", 64);
let numberFiles = Math.floor((storage * 1024) / 820);
console.log(`<${numberFiles}> file(s) fit on flash-storage.`);

