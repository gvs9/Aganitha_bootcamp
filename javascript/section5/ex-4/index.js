async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
  
      const userData = await response.json();
      console.log('Retrieved user data:', userData);
  
      processUserData(userData);
      
      return userData;
    } catch (error) {
      console.error('error:', error.message);
      throw error; 
    }
  }
  
  function processUserData(userData) {
    const processedData = `${userData.name} - ${userData.email}`;
    console.log('Processed user data:', processedData);
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
  
  
  const multiuserId = [1, 2, 3];
  fetchMultipleUsers(multiuserId);
  

  // async function fetchUserData(userIds) {
//     try {
//         const responseData = await userIds.map(user => fetch(`https://api.github.com/users/${user}`))
//       const promises = await Promise.all(responseData);
  
//         const users_data =await  Promise.all(promises.map(res => {
//             return res.json();
//         }))

//         console.log('this is the data ', users_data)
    
  
      
//     } catch (error) {
//       console.error(`Error fetching user data for ID:`, error.message);
//     }
//   }
  
//   let arr = [1, 2, 3];
//   fetchUserData(arr);
