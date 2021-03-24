import axios from "axios";

const api = axios.create({
  baseURL: "https://605ae66727f0050017c05733.mockapi.io/",
});

export default api;