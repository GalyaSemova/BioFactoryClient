import { request } from "../../utils/AxiosHelper"

const AuthUserDataService = (username, password) => {
  return request("POST", "/users/login", {
    username,
    password,
  })
    .then((res) => {
      if (res != null) {
        console.log(res);
        return res;
      }
    })
    .catch((err) => {
      let error = "";

      if (err.response) {
        error += err.response;
      }
      return error;
    });
};

export default AuthUserDataService;