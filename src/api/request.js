import axios from "axios";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_ADDR}`,
});

const request = ({ ...options }) =>
  client(options)
    .then((response) => response?.data)
    .catch((error) => {
      throw error;
    });

export default request;
