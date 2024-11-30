<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <p>Chào mừng đến với bảng điều khiển của bạn. Chỉ những người dùng đã xác thực mới có thể truy cập trang này.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  };
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
    background-color: #e0f7fa;
    border-radius: 8px;
  }
  
  h1 {
    font-size: 2rem;
    color: #00796b;
  }
  
  p {
    font-size: 1.2rem;
    color: #004d40;
  }
  </style>
  