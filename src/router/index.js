import { createRouter, createWebHistory } from 'vue-router';

// Các component
import Home from '../views/Home.vue';
import BlogList from '../views/BlogList.vue';
import BlogPost from '../views/BlogPost.vue';
import UserProfile from '../views/UserProfile.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';  // Trang Đăng Ký
import Dashboard from '../views/Dashboard.vue';

// Kiểm tra trạng thái xác thực từ localStorage
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

// Định nghĩa các routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blogs', name: 'BlogList', component: BlogList },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost, props: true },
  { path: '/profile', name: 'UserProfile', component: UserProfile, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register }, // Route cho đăng ký
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Bảo vệ route Dashboard yêu cầu xác thực
  },
];

// Tạo router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guard để bảo vệ các route yêu cầu xác thực
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' }); // Chuyển hướng đến trang Login nếu chưa xác thực
  } else {
    next(); // Tiếp tục nếu đã xác thực hoặc không yêu cầu xác thực
  }
});

export default router;
