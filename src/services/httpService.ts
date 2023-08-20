import axios from "axios";

// temp (Will be delete)
let token : string ;

axios.interceptors.request.use(
  function (config) {

    // Do something before request is sent
    // const AUTH_TOKEN  = localStorage.getItem("TOKEN");
    // if (AUTH_TOKEN) {
    //     config.headers!.Authorization = AUTH_TOKEN ;
    // }
    console.log("req");
    
    return config;
  },

  function (error) {
    // Do something with request error
    console.log("axios.interceptors.request error", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log('res');
    return response;
  },
  function (error) {
    console.log(error);
    // if (error?.response?.status === 401) {
    //   setTimeout(() => {
    //     window.location.href = "/Login";
    //   }, 3000);
    // }

    // if (error?.response?.status === 403) {
    //   setTimeout(() => {
    //     window.location.href = "/Login";
    //   }, 3000);
    // }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
