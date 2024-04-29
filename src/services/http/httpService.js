import axios from "axios";
import LoggerService from "../logger/LoggerService";
import { services } from "./Service";
LoggerService.init();

axios.interceptors.request.use(async (config) => {

  console.log("config",config)
  return config;
});

axios.interceptors.response.use(
  (response) => {
    response = services.insertSerialNumberIdIfIsGet(response);
    return response;
  },
  async (error) => {
    try {
      LoggerService.log(error);
      await services.handle40XRedirect(error);
      error = await services.getErrorResponse(error);
      return Promise.reject(error);
    } catch (catchedError) {}
  }
);

// try {
//   const acc_token = JSON.parse(localStorage.getItem("token"));
//   const token_config = "Bearer " + acc_token;
//   axios.defaults.headers.common["Authorization"] = token_config;
//   axios.defaults.headers.common["Content-Type"] = "application/json";
// } catch (error) {}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};  