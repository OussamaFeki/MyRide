import axios from 'axios';

const baseURL = 'http://192.168.100.98:3008/verifications';

// Function to submit a new verification request
export const createVerification = async (verificationData) => {
  try {
    const response = await axios.post(baseURL, verificationData);
    return response.data; // Returns the created verification object
  } catch (error) {
    console.error('Error creating verification:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to update the verification status
export const updateVerificationStatus = async (id, statusData) => {
  try {
    const response = await axios.patch(`${baseURL}/${id}/status`, statusData);
    return response.data; // Returns the updated verification object
  } catch (error) {
    console.error('Error updating verification status:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to retrieve all verification requests
export const getAllVerifications = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; // Returns an array of verification requests
  } catch (error) {
    console.error('Error fetching verifications:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get a verification request by ID
export const getVerificationById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data; // Returns the verification object
  } catch (error) {
    console.error('Error fetching verification by ID:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};