<template>
    <div>
      <h2>Settings</h2>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
  
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
  
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfileSettings',
    data() {
      return {
        username: 'John Doe',
        email: 'john.doe@example.com',
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #4caf50;
  }
  form {
    margin-top: 20px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }
  input {
    padding: 8px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
  }
  button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  