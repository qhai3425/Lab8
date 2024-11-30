<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Enter your username" required />
        
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        
        <button type="submit">Login</button>
      </form>
      <p v-if="loginFailed" class="error-message">Invalid username or password. Please try again.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        loginFailed: false, // Trạng thái lỗi đăng nhập
      };
    },
    methods: {
      login() {
        // Lấy thông tin từ localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        // Kiểm tra thông tin đăng nhập
        if (this.username === storedUsername && this.password === storedPassword) {
          localStorage.setItem('isAuthenticated', 'true'); // Đánh dấu là đã xác thực
          this.$router.push({ name: 'UserProfile' }); // Chuyển hướng đến Profile
        } else {
          this.loginFailed = true; // Nếu thông tin sai, hiển thị lỗi
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* CSS cho trang đăng nhập */
  .login {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 1.6rem;
    color: #333;
    text-align: center;
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  