function fibRecur(n) {
    if (n <= 1) {
        return 1;
    }
    return fibRecur(n - 1) + fibRecur(n - 2);
}

function fibMemo(n, memo = {}) {
    if (n <= 1) {
        return 1;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

function fibIter(n) {
    if (n <= 1) {
        return 1;
    }
    let a = 1, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function calculateTime(func, n) {
    const startTime = process.hrtime();
    const result = func(n);
    const endTime = process.hrtime(startTime);
console.log(`result: ${result}`);
    console.log(`Execution Time: ${endTime[0]}s ${endTime[1] / 1e6} ms`);
}


const n = parseInt(process.argv[2]);


console.log("recursive fib:");
calculateTime(fibRecur, n);

console.log("\nmemoized fib:");
calculateTime(fibMemo, n);

console.log("\niterative fib:");
calculateTime(fibIter, n);
