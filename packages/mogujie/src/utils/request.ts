import axios from "axios";

const request = axios.create({});

request.interceptors.request.use((config) => {
  // config.headers["token"] = 123;
  return config;
});

request.interceptors.response.use((response) => {
  return response;
});

export default request;
