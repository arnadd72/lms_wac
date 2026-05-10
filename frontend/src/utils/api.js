import axios from 'axios';

const api = axios.create({
  // Tembak langsung ke port Laravel
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

export const adminApi = {
  getStats: () => api.get('/admin/stats'),
  
  // Users
  getUsers: (params) => api.get('/admin/users', { params }),
  createUser: (data) => api.post('/admin/users', data),
  updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
  resetPassword: (id, password) => api.post(`/admin/users/${id}/reset-password`, { password }),

  // Courses
  getCourses: (params) => api.get('/admin/courses', { params }),
  updateCourseStatus: (id, status, feedback) => api.put(`/admin/courses/${id}/status`, { status, feedback }),

  // Categories
  getCategories: () => api.get('/categories'),
  createCategory: (data) => api.post('/admin/categories', data),
  updateCategory: (id, data) => api.put(`/admin/categories/${id}`, data),
  deleteCategory: (id) => api.delete(`/admin/categories/${id}`),

  // Settings
  getSettings: () => api.get('/admin/settings'),
  updateSettings: (settings) => api.post('/admin/settings', { settings }),
  clearCache: () => api.post('/admin/clear-cache'),
};

export default api;
