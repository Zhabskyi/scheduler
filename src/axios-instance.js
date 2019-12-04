import axios from "axios";

let instance;

if (process.env.REACT_APP_API_BASE_URL) {
  instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
  });
}  else {
  instance = axios;
}

export default instance;
