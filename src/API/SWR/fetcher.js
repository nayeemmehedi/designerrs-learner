import axiosAPI from "../../Helper/API/API_Helper";
// const token = "admin,61f91d2ff840928f96c4fc08"

const SWRFetcher = (url,token) => axiosAPI.post(url, {}, { headers: { Authorization: "Bearer " + token } });

const SWRTokenVerify = (url, body) => axiosAPI.post(url, body);

const SWRGET = (url) => axiosAPI.get(url);

export { SWRFetcher, SWRTokenVerify, SWRGET }