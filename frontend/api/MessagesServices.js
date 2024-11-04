import axios from 'axios';

const baseURL = 'http://192.168.100.98:3008/messages';

// Function to create a new message
export const createMessage = async (messageData) => {
  try {
    const response = await axios.post(baseURL, messageData);
    return response.data; // Returns the created message object
  } catch (error) {
    console.error('Error creating message:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get messages by user ID
export const getUserMessages = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/${userId}`);
    return response.data; // Returns an array of messages for the user
  } catch (error) {
    console.error('Error fetching user messages:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to mark a message as received
export const markMessageAsReceived = async (id) => {
  try {
    const response = await axios.put(`${baseURL}/${id}/received`);
    return response.data; // Returns the updated message object
  } catch (error) {
    console.error('Error marking message as received:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to mark a message as read
export const markMessageAsRead = async (id) => {
  try {
    const response = await axios.put(`${baseURL}/${id}/read`);
    return response.data; // Returns the updated message object
  } catch (error) {
    console.error('Error marking message as read:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};