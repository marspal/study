import axios from "axios";

const request = axios.create({});

request.interceptors.request.use((config) => {
  // config.headers["token"] = 123;
  return config;
});

request.interceptors.response.use((response) => {
  // 状态码 找到对应的message
  return response.data;
});

export default request;
