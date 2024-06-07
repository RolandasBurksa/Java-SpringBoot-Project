import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/books";

export const getAllBooks = () => axios.get(BASE_REST_API_URL);

export const saveBook = (book) => axios.post(BASE_REST_API_URL, book);
