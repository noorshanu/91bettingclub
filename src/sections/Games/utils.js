// utils.js
import axios from "axios";

// Function to get an item from localStorage
export const getItem = (key) => {
  return localStorage.getItem(key);
};

// Function to set an item in localStorage
export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

// Function to remove an item from localStorage
export const removeItem = (key) => {
  localStorage.removeItem(key);
};

// Function to get the access token
export const getAccessToken = () => {
  return getItem('token');
};

// Function to get the refresh token
export const getRefreshToken = () => {
  return getItem('refreshToken');
};

// Function to set the access token
export const setAccessToken = (token) => {
  setItem('token', token);
};

// Function to set the refresh token
export const setRefreshToken = (token) => {
  setItem('refreshToken', token);
};

// Function to remove tokens
export const clearTokens = () => {
  removeItem('token');
  removeItem('refreshToken');
};

// Function to set the Authorization header with the access token
export const setAuthHeader = (headers) => {
  const token = getAccessToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

// Function to refresh the access token
export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await axios.post(
    'https://game.myclub11.com/wingo/token/refresh/',
    { refresh: refreshToken },
    { headers: { 'Content-Type': 'application/json' } }
  );

  const newAccessToken = response.data.access;
  const newRefreshToken = response.data.refresh;

  setAccessToken(newAccessToken);
  setRefreshToken(newRefreshToken);

  return newAccessToken;
};
