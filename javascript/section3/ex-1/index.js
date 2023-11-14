function compose(f, g) {
    
    return function(x) {
    
      return f(g(x));
    };
  }
  
  
  function square(x) {
    return x * x;
  }
  
  function double(x) {
    return 2 * x;
  }
  
  const ans = compose(double, square);
  
  
  console.log(ans(5)); 
  






