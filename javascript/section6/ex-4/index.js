const axios = require('axios');


async function fetchData() {
  try {
    
    const response = await axios.get('https://api.github.com/users/1');
    console.log('fetched Data:',response.data);
  } catch (error) {
    
    console.error('err:', error.message);
  }
}


fetchData();
