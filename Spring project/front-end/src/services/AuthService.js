import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export const registerAPICall = (registerObj) =>
  axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);

export const loginAPICall = (usernameOrEmail, password) =>
  axios.post(AUTH_REST_API_BASE_URL + "/login", { usernameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username) =>
  sessionStorage.setItem("authenticatedUser", username);

// export const saveLoggedInUser = (user) =>
//   localStorage.setItem("user", JSON.stringify(user));

export const isUserLoggedIn = () => {
  const username = sessionStorage.getItem("authenticatedUser");

  if (username == null) {
    return false;
  } else {
    return true;
  }
};

// export const isUserLoggedIn = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return user !== null;
// };

export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};

// export const getLoggedInUser = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return user;
// };

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

// export function getUserRole() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return user ? user.role : null;
// }

// The login function which combines loginAPICall, storeToken, and saveLoggedInUser
// export async function login(usernameOrEmail, password) {
//   try {
//     const response = await loginAPICall(usernameOrEmail, password);
//     const token = "Basic " + window.btoa(usernameOrEmail + ":" + password);
//     console.log("Login response:", response.data); // Log the response data
//     storeToken(token);
//     saveLoggedInUser({ username: usernameOrEmail, role: response.data.role }); // Assuming the role is in the response
//     return response;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
