function composeWithReduce(func) {
    
    return func.reduce(function (f, g) {
      
      return function (x) {
        return f(g(x));
      };
    });
  }
  
  
  const double = function (x) {
    return x * 2;
  };
  
  const square = function (x) {
    return x * x;
  };
  
  const add = function (x) {
    return x + 1;
  };
  
  
  const result= composeWithReduce([add, square, double]);
  
  
  console.log(result(3)); 
  