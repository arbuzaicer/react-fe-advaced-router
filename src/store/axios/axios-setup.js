import axios from "axios";
import store from "../store";

axios.defaults.baseURL = "https://air-quality.p.rapidapi.com";

axios.interceptors.request.use((request) => {
  const storeData = store.getState();

  if (storeData.auth.token) {
    request.headers = {
      ...request.headers,
      "X-RapidAPI-Key": storeData.auth.token,
      "X-RapidAPI-Host": storeData.auth.host,
    };
  }

  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === "token is expired") {
      const storeData = store.getState();

      const request = error.config;
      request.headers = {
        ...request.headers,
        "X-RapidAPI-Key": storeData.auth.refreshToken,
        "X-RapidAPI-Host": storeData.auth.host,
      };

      return Promise.resolve(request);
    }

    return Promise.reject(error);
  }
);
