import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://9231-27-3-254-224.ngrok.io",
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
