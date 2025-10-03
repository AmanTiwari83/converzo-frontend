// socket.js
import { io } from "socket.io-client";

// Get the backend URL from env (set in .env.production or .env.local)
const SOCKET_URL = import.meta.env.VITE_SERVER_URL;

const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"], // helps on free hosting like Render
  withCredentials: true,
});

export default socket;
