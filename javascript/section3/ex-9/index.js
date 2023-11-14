function calculate(a, b, operationFn) {
    
    return operationFn(a, b);
  }
  
  
  const add = function (x, y) {
    return x + y;
  };
  
  const subtract = function (x, y) {
    return x - y;
  };
  
  const multiply = function (x, y) {
    return x * y;
  };
  
  
  const result1 = calculate(5, 3, add);
  console.log(result1);
  
  const result2= calculate(8, 3, subtract);
  console.log(result2); 
  
  const result3 = calculate(4, 6, multiply);
  console.log(result3); 
  