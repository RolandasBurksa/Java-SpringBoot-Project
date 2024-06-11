import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = "http://localhost:8080/api/books";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["Authorization"] = getToken();

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const getAllBooks = () => axios.get(BASE_REST_API_URL);

export const saveBook = (book) => axios.post(BASE_REST_API_URL, book);

export const getBook = (id) => axios.get(BASE_REST_API_URL + "/" + id);

export const updateBook = (id, book) =>
  axios.put(BASE_REST_API_URL + "/" + id, book);

export const deleteBook = (id) => axios.delete(BASE_REST_API_URL + "/" + id);
