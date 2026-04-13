import Cookies from "js-cookie";


// Save Token
export const setToken = (token) => {
  localStorage.setItem("accessToken", token);
  Cookies.set("accessToken", token);
};

// Get Token
export const getToken = () => {
  return localStorage.getItem("accessToken");
};

// Remove Token
export const removeToken = () => {
  localStorage.removeItem("accessToken");
  Cookies.remove("accessToken");
};

// Save User
export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Get User
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Remove User
export const removeUser = () => {
  localStorage.removeItem("user");
};

// Logout - All clear
export const clearAuth = () => {
  removeToken();
  removeUser();
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!getToken();
};