import classes from './LoginForm.module.css'
import AuthService from '../../services/AuthService';


import { useState } from "react";
import { useNavigate } from "react-router-dom";



function LoginForm() {



  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const [loginState, setLoginState] = useState({
    hasLoginFailed: false,
    showSuccessMessage: false,
  });

  const validate = () => {
    const errors = {};

    if (!username) {
      errors.username= "username required";
    } else if (username.length < 3) {
      errors.username = "Invalid username";
    }

    if (!password) {
      errors.password = "A password is required";
    }

    return errors;
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    let errors = validate(username, password);
    setErrors(errors);
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <form className="mb-lg-2"  onSubmit={handleLogin}>

                              <h5 className="card-title text-center text-white">Login</h5>

                                <div>
                                    {loginState.hasLoginFailed && (
                                    <div className={classes.error}> The email and password don't match.</div>
                                    )}
                                    {loginState.showSuccessMessage && (
                                    <div className={classes.error}>Login successful</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label text-white">Username</label>
                                    <input type="text" 
                                           className="form-control" 
                                           id="username" 
                                           name="username"
                                           value={username}
                                           onChange={onChangeUsername}
                                          
                                           placeholder="Enter your username"
                                           />
                                     <label> 
                                        {errors.username && (
                                            <small className={classes.errors}>{errors.username}</small>
                                        )}
                                    </label>
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-white">Password</label>
                                    <input type="password" 
                                           className="form-control" 
                                           id="password" 
                                           name="password"
                                           value={password}
                                           onChange={onChangePassword}
                                      
                                           placeholder="Enter your password" 
                                           />
                                      <label> 
                                        {errors.password && (
                                            <small className={classes.errors}>{errors.password}</small>
                                        )}
                                    </label>
                                </div>
                                <div className="d-grid gap-2 justify-content-center">
                                    {/*<div className="row mb-4">*/}
                                    {/*    <div>*/}
                                    {/*        <div className="form-check">*/}
                                    {/*            <input className="form-check-input" type="checkbox" value=""*/}
                                    {/*                   id="form2Example31" checked/>*/}
                                    {/*            <label className="form-check-label" htmlFor="">*/}
                                    {/*                Remember me*/}
                                    {/*            </label>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="col">*/}
                                    {/*        <a href="#">Forgot password?</a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/* <MainButton value="Login" href="/"/> */}
                                    <div>
                                       <button  className={classes.button}  type="submit" disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                          )}
                                          <span>Login</span>
                                      </button>
                                    </div>
                                </div>

                                {message && (
                                <div className="form-group">
                                  <div className="alert alert-danger" role="alert">
                                    {message}
                                  </div>
                                </div>
                              )}
                              {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                            </form>
                            <div>
                                <div className="text-center">
                                    <p className="text-white">Not a member? <a href="/register" >Register</a></p>
                                    {/*<p>or sign up with:</p>*/}
                                    {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                                    {/*    <i className="fab fa-facebook-f"></i>*/}
                                    {/*</button>*/}

                                    {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                                    {/*    <i className="fab fa-google"></i>*/}
                                    {/*</button>*/}

                                    {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                                    {/*    <i className="fab fa-twitter"></i>*/}
                                    {/*</button>*/}

                                    {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                                    {/*    <i className="fab fa-github"></i>*/}
                                    {/*</button>*/}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container mt-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-4">
        //             <div className="card">
        //                 <div className="card-body">
        //                     <h5 className="card-title text-center">Login</h5>
        //                     <form>
        //                         <div className="mb-3">
        //                             <label htmlFor="email" className="form-label">Email address</label>
        //                             <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="password" className="form-label">Password</label>
        //                             <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        //                         </div>
        //                         <div className="d-grid gap-2">
        //                             <button type="submit" className="btn btn-primary" style = {{
        //                                 backgroundColor: "#008000",
        //                             }}>Login</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default LoginForm;