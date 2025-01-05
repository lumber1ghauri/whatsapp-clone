import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000", // Backend URL
});

// Example API calls
export const fetchChats = (userId) => API.get(`/api/chats/${userId}`); // GET request
export const sendMessage = (chatId, messageData) =>
  API.post(`/api/chats/message`, { chatId, ...messageData }); // POST request
export const fetchStatuses = () => API.get(`/api/statuses`); // Fetch statuses
