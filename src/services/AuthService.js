import { request } from "../utils/AxiosHelper";

const apiEndpoint = '/users';

const AuthService = {
  login: (username, password) => {
    return request('POST', `${apiEndpoint}/login`, { username, password })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          return error.response;
        } else {
          return error.message;
        }
      });
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  register: (username, email, password, confirmPassword, firstName, lastName, address, phoneNumber) => {
    return request('POST', `${apiEndpoint}/register`, {
      username,
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      address,
      phoneNumber,
    });
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  // TODO testing
  isLoggedIn: () => {
    return !!localStorage.getItem('user');
  }
};

export default AuthService;