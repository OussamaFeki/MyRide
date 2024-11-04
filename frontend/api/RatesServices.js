import axios from 'axios';

const baseURL = 'http://192.168.100.98:3008/ratings';

// Function to create a new rating
export const createRating = async (ratingData) => {
  try {
    const response = await axios.post(baseURL, ratingData);
    return response.data; // Returns the created rating object
  } catch (error) {
    console.error('Error creating rating:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get all ratings with pagination
export const getAllRatings = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(baseURL, {
      params: { page, limit }, // Sending pagination parameters
    });
    return response.data; // Returns an array of ratings
  } catch (error) {
    console.error('Error fetching ratings:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};