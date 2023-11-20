async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
  
   
      const userData = await response.json();
      console.log('retrieved user data:', userData);
  
      processUserData(userData);
      
      return userData;
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  }
  
  function processUserData(userData) {
    const processedData = `${userData.name} - ${userData.email}`;
    console.log('processed user data:', processedData);
  }
  
  async function fetchMultipleUsers(multiuserId) {
    try {
      
      const Promises = multiuserId.map(userId => fetchUserData(userId));
  
      const userArr = await Promise.all(Promises);
  
      
      console.log('user data:', userArr);
    } catch (error) {
      console.error('err:', error.message);
    }
  }
  
  
  const userIds = [1, 2, 3];
  fetchMultipleUsers(userIds);
  
  



  