import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.8.136:8001",
  baseURL: "http://localhost:8001",
});

export default instance;
