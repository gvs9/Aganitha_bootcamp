function reverseString(str) {
    let rev='';

    for(let i=str.length-1;i>=0;i--){

        rev+=str[i];
    }

    return rev;
  }
  
  
  function countCharacters(str) {
    return str.length;
  }
  

  module.exports = {
    reverseString,
    countCharacters,
  };
  