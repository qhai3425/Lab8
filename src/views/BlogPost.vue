<template>
    <div class="blog-post">
      <h1>Blog Post {{ id }}</h1>
      <p>{{ title }}</p>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPost',
    props: ['id'], // Nhận id từ route
    computed: {
      title() {
        return `Blog Post ${this.id}`;
      },
      content() {
        return `Đây là nội dung của bài đăng trên Blog ${this.id}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-post {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #333;
    font-size: 2rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
  }
  </style>
  