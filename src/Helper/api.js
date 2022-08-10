import axios from "axios";
import { loadToken, logout } from "../App";
//pass new generated access token here
// const token = `Bearer ${localStorage?.getItem('authUser')}`

//apply base url for axios
const API_URL =
process.env.REACT_APP_BASEURL || "https://ds-api.edalytics.com/api";
// process.env.REACT_APP_BASEURL || "https://93cf-103-92-43-234.in.ngrok.io/api";

const axiosApi = axios.create({
  baseURL: API_URL,
});

const accessToken = localStorage.getItem("accessToken");

axiosApi.defaults.headers.common["Authorization"] = accessToken;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("err", error.response);
    if (error.response.status === 401) {
      // logout();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export async function get(url, config = {}) {
  loadToken();
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  loadToken();
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  loadToken();
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  loadToken();
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}

export default axiosApi;
