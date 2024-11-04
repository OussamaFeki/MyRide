import axios from 'axios';

const baseURL = 'http://192.168.100.98:3008/bookings';

// Function to create a new booking
export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(baseURL, bookingData);
    return response.data; // Returns the created booking object
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get all bookings
export const getAllBookings = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; // Returns an array of bookings
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get a booking by ID
export const getBookingById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data; // Returns the booking object
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to get bookings by ride ID
export const getBookingsByRideId = async (rideId) => {
  try {
    const response = await axios.get(`${baseURL}/ride/${rideId}`);
    return response.data; // Returns an array of bookings for the ride
  } catch (error) {
    console.error('Error fetching bookings by ride ID:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to accept a booking
export const acceptBooking = async (id) => {
  try {
    const response = await axios.patch(`${baseURL}/${id}/accept`);
    return response.data; // Returns the updated booking object
  } catch (error) {
    console.error('Error accepting booking:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to refuse a booking
export const refuseBooking = async (id) => {
  try {
    const response = await axios.patch(`${baseURL}/${id}/refuse`);
    return response.data; // Returns the updated booking object
  } catch (error) {
    console.error('Error refusing booking:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

// Function to delete a booking by ID
export const deleteBooking = async (id) => {
  try {
    await axios.delete(`${baseURL}/${id}`);
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};