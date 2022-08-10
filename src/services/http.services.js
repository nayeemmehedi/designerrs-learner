import axios from "axios";

const instanceNew = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://7ae5-2409-4072-6e1c-7be6-1932-8b4f-a676-ff6e.in.ngrok.io/api",
});

const accessToken = localStorage.getItem("accessToken");

instanceNew.defaults.headers.common["Authorization"] = accessToken;

instanceNew.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("err", error.response);
    if (error.response.status === 401) {
      // tokenRenew(uid, refreshToken);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

class Request {
  async get(url, config = {}) {
    return instanceNew.get(url, { ...config }).then((res) => res);
  }

  async patch(url, { ...data }, { ...config }) {
    return instanceNew.patch(url, { ...data }, { ...config }).then((res) => res);
  }
  async post(url, { ...data }, { ...config }) {
    return instanceNew.post(url, { ...data }, { ...config }).then((res) => res);
  }
  async delete(url, { ...data }, { ...config }) {
    return instanceNew
      .detele(url, { ...data }, { ...config })
      .then((res) => res);
  }
}
const httpReq = new Request();

export default httpReq;
