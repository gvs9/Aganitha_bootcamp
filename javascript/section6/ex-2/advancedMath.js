function add(a, b) {
    return a + b;
  }
  

  function subtract(a, b) {
    return a - b;
  }
  
  
  function multiply(a, b) {
    return a * b;
  }
  

  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("not divide by zero");
    }
  }
  
  function squareRoot(num) {
    if (num >= 0) {
      return Math.sqrt(num);
    } else {
      throw new Error("negative number");
    }
  }
  

  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
  };