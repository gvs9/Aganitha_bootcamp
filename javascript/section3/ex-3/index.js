function multiplyBy(x) {
    
    return function(y) {
      return x * y;
    };
  }

  const result= multiplyBy(5);
  
  
  console.log(result(3));
  console.log(result(10)); 
  
  
  