import axios from 'axios';
import ENV from "../env.config"
import { Link, withRouter } from 'react-router-dom';

let API_BASE_URL = ENV.API.BASE_URL + '/v1';
const CancelToken = axios.CancelToken;
export const apiRequest = async ({
  method,
  url,
  queryParams = {},
  data = null,
  headers = {
      'x-site': 1
  },
  onUploadProgress,
  onDownloadProgress,
  responseType = 'json',
  includeUser = false,
  authUser = true
}) => {
  try {
    const token = sessionStorage.getItem('token');
    if (token == null) {
      // move to login
    }

    if (typeof token == 'string') {
      headers.authorization = 'Bearer ' + token;
    }

    if(includeUser){
      
      let w3_user = localStorage.getItem("w3_user");
      let w3_cart = localStorage.getItem("w3_cart");
    
      if(w3_user) queryParams['w3_user'] = w3_user;
      if(w3_cart) queryParams['w3_cart'] = w3_cart;

    }

    if(authUser){
      let w3_auth = localStorage.getItem("w3_auth");
      if(w3_auth) queryParams['w3_auth'] = w3_auth;
    }

    console.log(
      'New Request: ',
      method,
      API_BASE_URL + url,
      'headers: ',
      headers,
      'data: ',
      data,
      'queryParams: ',
      queryParams
    );

    const response = await axios.request({
      baseURL: API_BASE_URL,
      method,
      url,
      params: queryParams,
      data,
      headers,
      onUploadProgress,
      onDownloadProgress,
      timeout: 3600 * 1000 //3600 seconds
    });
    // console.log("response.data: ", response);

    if(parseInt(response.status/100) == 5){
      let error = new Error(response.data)
      error.statusCode = response.status
      error.message = response.data.message || 'Unknown Error'
      throw error
    }
    // if (response.data.status == false) {
    //   let error = new Error(response.data.message);
    //   error.originalMessage = response.data.message;
    //   error.statusCode = 400;
    //   throw error;
    // }

    console.log("Response Object", response)


    console.log(response.data);

    return response.data;

  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      const errorMsg =
        error.response.data.message || 'Server is Down :(';
      if (error && error.response && error.response.data) {
        return error.response.data;
      }
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
      if (error.request.status == 0) {
        // alert("No Internet")
        return {message: 'No Internet'};
      }
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
  }
};
