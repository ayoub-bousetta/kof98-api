import axios from "axios";

export const URLstorage = 'http://kof98api.aubbusta.co/storage'
export default axios.create({
  baseURL: "http://kof98api.aubbusta.co/api",
  responseType: "json"
});

