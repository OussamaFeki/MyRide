import axios from 'axios';

const baseURL = 'http://192.168.100.98:3008/riders';

// Function to create a new rider
export const createRider = async (riderData) => {
  try {
    const response = await axios.post(baseURL, riderData);
    return response.data; // Returns the created rider object
  } catch (error) {
    console.error('Error creating rider:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get all riders
export const getAllRiders = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; // Returns an array of riders
  } catch (error) {
    console.error('Error fetching riders:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};