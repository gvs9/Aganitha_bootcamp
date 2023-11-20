function curry(additionFn) {

    return function(x) {
      return function(y) {
        return additionFn(x, y);
      };
    };
  }
  
  
  const add = function(x, y) {
    return x + y;
  };
  

  const Add = curry(add);
  
  
  const add5 = Add(5);
  console.log(add5(3)); 
  
  const add10 = Add(10);
  console.log(add10(7));
  