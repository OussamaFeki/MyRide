// services/UserService.js
import userService from '../api/userService';

const UserService = {
  async registerUser(userData) {
    try {
      const response = await userService.createUser(userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error.response?.data || error.message);
      throw error;
    }
  },

  async loginUser(loginData) {
    try {
      console.log(loginData)
      const response = await userService.loginUser(loginData);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      throw error;
    }
  },

  async fetchUserById(id) {
    try {
      const response = await userService.getUserById(id);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error.response?.data || error.message);
      throw error;
    }
  },

  async fetchAllUsers() {
    try {
      const response = await userService.getAllUsers();
      return response.data;
    } catch (error) {
      console.error('Error fetching all users:', error.response?.data || error.message);
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      const response = await userService.deleteUser(id);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error.response?.data || error.message);
      throw error;
    }
  },
};

export default UserService;
