import axios from 'axios';
import api from './api';

const baseURL = 'http://192.168.100.98:3008';
const userService = {
  createUser: (userData) => 
    axios.post(`${baseURL}/users`, JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json',
      },
    }),  // Create a new user

  loginUser: (loginData) => 
    axios.post(`${baseURL}/users/login`, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),  // Log in a user

  getUserById: (id) => 
    axios.get(`${baseURL}/users/${id}`),  // Fetch a user by ID

  getAllUsers: () => 
    axios.get(`${baseURL}/users`),  // Fetch all users

  deleteUser: (id) => 
    axios.delete(`${baseURL}/users/${id}`),  // Delete a user by ID
};

export default userService;