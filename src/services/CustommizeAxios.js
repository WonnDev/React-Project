import axios from "axios";

const instance = axios.create({
  baseURL: `https://reqres.in/`,
  // timeout: 1000,
  // headers: {'X-Custom-Header': ''}
});

instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.header = error.response.header;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error: ", error.message);
    }
    return res;
    // return Promise.reject(error);
  }
);

export default instance;
