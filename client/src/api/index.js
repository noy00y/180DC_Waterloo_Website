import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const sendMessage = (messageData) =>
  API.post("message/new-message", messageData);
