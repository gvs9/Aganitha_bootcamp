const mathOperations = require('./mathOperation');

const result1 = mathOperations.add(5, 3);
const result2 = mathOperations.subtract(8, 4);
const result3 = mathOperations.multiply(2, 6);
const result4 = mathOperations.divide(10, 2);

console.log(`add: ${result1}`);
console.log(`sub: ${result2}`);
console.log(`multi: ${result3}`);
console.log(`div: ${result4}`);
