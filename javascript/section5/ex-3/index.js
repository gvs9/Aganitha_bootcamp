async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      const userData = await response.json();
      console.log('retrieved user data:', userData);
      
    processUserData(userData);
    } catch (error) {
      console.error('error:', error.message);
    }
  }
  
  function processUserData(userData) {
 const processedData = `${userData.name} - ${userData.email}`;
    console.log('processed user data:', processedData);
  }
  

  const userId = 1;
  fetchUserData(userId);