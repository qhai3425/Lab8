<template>
    <div class="blog-list">
      <h1>Danh sách Blog</h1>
      <ul>
        <!-- Lặp qua các bài blog -->
        <li v-for="blog in blogs" :key="blog.id">
          <!-- Liên kết đến trang chi tiết bài viết -->
          <router-link :to="{ name: 'BlogPost', params: { id: blog.id } }">
            {{ blog.title }}
          </router-link>
          <!-- Hiển thị nội dung bài viết -->
          <p>{{ blog.content }}</p>
          <!-- Thêm thông tin tác giả và ngày tạo -->
          <p class="author-info">Tác giả: {{ blog.author }} vào ngày {{ blog.createdAt }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogList',
    data() {
      return {
        // Mảng các bài blog với thông tin bao gồm id, tiêu đề, nội dung, tác giả và ngày tạo
        blogs: [
          { id: 1, title: 'Bài viết Blog 1', content: 'Đây là nội dung của bài viết blog đầu tiên.', createdAt: '2024-11-01', author: 'John Doe' },
          { id: 2, title: 'Bài viết Blog 2', content: 'Đây là bài viết thứ hai với nhiều chi tiết hơn.', createdAt: '2024-11-02', author: 'Jane Smith' },
          { id: 3, title: 'Bài viết Blog 3', content: 'Đây là bài viết thứ ba, thảo luận sâu về một chủ đề nào đó.', createdAt: '2024-11-03', author: 'Michael Johnson' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Container cho danh sách blog */
  .blog-list {
    margin: 20px;
    padding: 15px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Tiêu đề trang */
  h1 {
    font-size: 2.2rem;
    color: #4caf50;
    margin-bottom: 15px;
    text-align: center;
  }
  
  /* Danh sách các bài blog */
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  /* Các phần tử trong danh sách */
  li {
    background-color: #fff;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  /* Hover hiệu ứng cho các bài blog */
  li:hover {
    background-color: #e0f7fa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Liên kết đến bài viết */
  router-link {
    color: #4caf50;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  /* Hiệu ứng hover cho liên kết */
  router-link:hover {
    color: #388e3c;
  }
  
  /* Nội dung bài viết */
  p {
    font-size: 1rem;
    color: #555;
    margin: 10px 0;
  }
  
  /* Thông tin tác giả và ngày tạo */
  .author-info {
    font-size: 0.9rem;
    color: #777;
    margin-top: 5px;
  }
  </style>
  