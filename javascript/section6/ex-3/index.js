const stringUtils = require('./utils/stringUtils');

const string = 'gitesh';
const reversedString = stringUtils.reverseString(string);
const charCount = stringUtils.countCharacters(string);

console.log(`string: ${string}`);
console.log(`reversed String: ${reversedString}`);
console.log(`character Count: ${charCount}`);
