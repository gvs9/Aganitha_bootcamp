let arr = [-3, 5, 2, -8, 10, -4, 7];


let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum+= arr[i];
    }
}



console.log(" sum of positive numbers:", sum);
