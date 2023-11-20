async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
       const userData = await response.json();
      console.log('retrieved user data:', userData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  

  const userId = 1;
  fetchUserData(userId);
  