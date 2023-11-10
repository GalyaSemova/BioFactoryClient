class AuthenticationService {
  
    registerSuccessfulLoginUser(email) {
      sessionStorage.setItem("authenticatedUser", email);
      sessionStorage.setItem("role", "user");
      console.log("Successful login");
    }
  
    logout() {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload(false);
    }
  
    isUserLoggedIn() {
      let role = sessionStorage.getItem("role");
      if (role !== "user") {
        return false;
      } else {
        return true;
      }
    }

  
    getLoggedInUser() {
      let email = sessionStorage.getItem("authenticatedUser");
      if (email == null) {
        return "";
      } else {
        return email;
      }
    }
  
    setUpToken(jwtToken) {
      localStorage.setItem("token", jwtToken);
    }
  }
  
  export default new AuthenticationService();