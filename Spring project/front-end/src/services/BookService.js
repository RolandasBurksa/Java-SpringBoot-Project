import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/books";

export const getAllBooks = () => axios.get(BASE_REST_API_URL);

export const saveBook = (book) => axios.post(BASE_REST_API_URL, book);

export const getBook = (id) => axios.get(BASE_REST_API_URL + "/" + id);

export const updateBook = (id, book) =>
  axios.put(BASE_REST_API_URL + "/" + id, book);

export const deleteBook = (id) => axios.delete(BASE_REST_API_URL + "/" + id);
