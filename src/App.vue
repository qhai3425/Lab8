<template>
  <div id="app">
    <nav>
      <!-- Điều hướng trang chủ -->
      <router-link to="/">Home</router-link>
      <router-link to="/blogs">Blogs</router-link>
      
      <!-- Hiển thị các liên kết Profile và Dashboard chỉ khi người dùng đã đăng nhập -->
      <router-link v-if="isAuthenticated" to="/profile">Profile</router-link>
      <router-link v-if="isAuthenticated" to="/dashboard">Dashboard</router-link>
      <router-link v-if="isAuthenticated" to="/register">Đăng Ký</router-link>
      <router-link v-if="isAuthenticated" to="/login">Đăng Nhập</router-link>
    </nav>
    
    <!-- Hiển thị nội dung trang hiện tại -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    isAuthenticated() {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
  }
};
</script>

<style scoped>
/* Style cho navigation bar */
nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

nav a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}

nav a:hover {
  text-decoration: underline;
  color: #4caf50;
}

nav a:active {
  color: #388e3c;
}
</style>
