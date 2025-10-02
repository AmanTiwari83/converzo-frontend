// socket.js (optional shared instance file)
import { io } from "socket.io-client";
import { VITE_SERVER_URL } from "../utils/constant";

const socket = io(VITE_SERVER_URL);
export default socket;
