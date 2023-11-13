
let person= [
    { name: "Gitesh", age: 28, address: ["market1, Mumbai"] },
    { name: "Pranjal", age: 29, address: ["market,Nagpur"] }
];


let copiedArr = [...person];


console.log( person);
console.log( copiedArr);


copiedArr[0].address.push("market3, Delhi");
console.log( copiedArr);
