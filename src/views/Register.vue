<template>
    <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Enter your username" required />
        
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" required />
        
        <button type="submit">Register</button>
      </form>
      <p v-if="registrationFailed" class="error-message">Passwords do not match or missing information. Please try again.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        registrationFailed: false,
      };
    },
    methods: {
      register() {
        // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
        if (this.password === this.confirmPassword) {
          // Giả lập lưu thông tin người dùng vào localStorage
          localStorage.setItem('username', this.username);
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
          localStorage.setItem('isAuthenticated', 'false'); // Đặt trạng thái xác thực là false trước khi đăng nhập
          
          // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
          this.$router.push({ name: 'Login' });
        } else {
          this.registrationFailed = true; // Nếu mật khẩu không khớp
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* CSS cho trang đăng ký */
  .register {
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
  