
let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9];


let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        
        even.push(arr[i]);
    } else {
        
        odd.push(arr[i]);
    }
}


console.log(" array:", arr);
console.log("even array:", even);
console.log("odd array:", odd);
