function filterAndMap(num, filterFn, mapFn) {
    
    const evenNumbers = num.filter(filterFn);
  

    const squaredNumbers = evenNumbers.map(mapFn);
  
    return squaredNumbers;
  }
  
  
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  

  const filterEven = function (num) {
    return num % 2 !== 0;
  };
  
  
  const square = function (num) {
    return num* num;
  };
  
  
  const result = filterAndMap(num, filterEven, square);
  
  console.log(result); 
  