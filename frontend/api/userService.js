// api/userService.js
import api from './api';

const userService = {
  createUser: (userData) => 
    api.post('/users', userData, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      },
    }),  // Create a new user

  loginUser: (loginData) => 
    api.post('/users/login', loginData),  // Log in a user

  getUserById: (id) => 
    api.get(`/users/${id}`),  // Fetch a user by ID

  getAllUsers: () => 
    api.get('/users', {
      headers: {
        'Accept': '*/*',
      },
    }),  // Fetch all users

  deleteUser: (id) => 
    api.delete(`/users/${id}`, {
      headers: {
        'Accept': '*/*',
      },
    }),  // Delete a user by ID
};

export default userService;
