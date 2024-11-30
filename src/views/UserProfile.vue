<template>
    <div class="user-profile">
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {{ username }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    computed: {
      // Lấy thông tin người dùng từ localStorage
      username() {
        return localStorage.getItem('username');
      },
      email() {
        return localStorage.getItem('email');
      },
    },
  };
  </script>
  
  <style scoped>
  /* CSS cho UserProfile */
  .user-profile {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    max-width: 600px;
    margin: 20px auto;
  }
  
  h1 {
    font-size: 2rem;
    color: #4caf50;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
  }
  
  strong {
    color: #333;
  }
  </style>
  