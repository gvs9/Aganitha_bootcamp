function memoize(expensiveOperationFn) {
const cache = {};
  return function (...args) {
      const key = JSON.stringify(args);
  
    if (cache.hasOwnProperty(key)) {
    console.log("Cache Result:", key);
     return cache[key];
    } 

    else {
    const result = expensiveOperationFn(...args);
  cache[key] = result;
  return result;
      }
    };
  };
  
  const expensiveAdd = function (a, b) {
    console.log(" addition");
    return a + b;
  };

 const ans = memoize(expensiveAdd);
console.log(ans(3, 5));
console.log(ans(3, 5)); 
  