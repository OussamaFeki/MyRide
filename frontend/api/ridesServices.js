import axios from 'axios';

const baseURL = 'http://192.168.100.98:3008/rides';

// Function to create a new ride
export const createRide = async (rideData) => {
  try {
    const response = await axios.post(baseURL, rideData);
    return response.data; // Returns the created ride object
  } catch (error) {
    console.error('Error creating ride:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get all rides
export const getAllRides = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; // Returns an array of rides
  } catch (error) {
    console.error('Error fetching rides:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get a ride by ID
export const getRideById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data; // Returns the ride object
  } catch (error) {
    console.error('Error fetching ride by ID:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to update a ride by ID
export const updateRide = async (id, rideData) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, rideData);
    return response.data; // Returns the updated ride object
  } catch (error) {
    console.error('Error updating ride:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to delete a ride by ID
export const deleteRide = async (id) => {
  try {
    await axios.delete(`${baseURL}/${id}`);
    return; // No content to return on successful deletion
  } catch (error) {
    console.error('Error deleting ride:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get rides by status
export const getRidesByStatus = async (status) => {
  try {
    const response = await axios.get(`${baseURL}/status/${status}`);
    return response.data; // Returns an array of rides
  } catch (error) {
    console.error('Error fetching rides by status:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};