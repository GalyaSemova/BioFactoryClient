import classes from './RegisterForm.module.css'

import React, { useState, useRef } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";

import Form from 'react-validation/build/form';


import AuthService from "../../services/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The username must be between 4 and 30 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const RegisterForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState([]);

  // const validate = () => {
  //   const errors = {};

  //     if (!username) {
  //       errors.username = "Username is required";
  //     } else if (username.length < 5 || username.length > 30) {
  //       errors.username = "Username must be between 4 and 30 characters";
  //     }

  //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //       errors.email = "Invalid email address";
  //     }
  
  //     if (!firstName) {
  //       errors.firstName = "First Name is required";
  //     } else if (firstName.length < 2 || firstName.length > 20) {
  //       errors.firstName = "First name must be between 2 and 20 characters";
  //     }
  //     if (!lastName) {
  //       errors.lastName = "Last Name is required";
  //     } 

  //     if(!phoneNumber) {
  //       errors.phoneNumber = "Phone number is required";
  //     } else if(phoneNumber.length < 10 || phoneNumber.length > 15) {
  //       errors.phoneNumber = "Phone number must be between 10 and 15 digits";
  //     }
  
  
  //     if (!password) {
  //       errors.password = "Password is required";
  //     }
  //     if (!confirmPassword) {
  //       errors.confirmPassword = "Confirm your password";
  //     }
  //     if (password !== confirmPassword) {
  //       errors.confirmPassword = "Passwords don't match";
  //     }
  
  //     return errors;
  //   };   


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();
    // let errors = validate(username, email, password, firstName, lastName, phoneNumber, address, confirmPassword);

    if (errors.length === 0) {
      AuthService.register(username, email, password, confirmPassword, firstName, lastName, address, phoneNumber).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
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

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white mb-lg-3" >Register</h5>   
                          
                            <Form ref={(c) => { form.current = c; }} onSubmit={handleRegister}
                            onError={(errors) => setErrors(errors)}>
                              {!successful && (
                                <div>
                                  <div className="mb-3">
                                  <div className="row">
                                    <div className="col">
                                      <label htmlFor="username" className="form-label text-white">Username</label>
                                        <input type="text" 
                                                className="form-control" 
                                                id="username" 
                                                name="username" 
                                                value={username}
                                                onChange={onChangeUsername}
                                                validations={[required, vusername]}
                                                placeholder="Enter your Username" />
                                            <label> 
                                                {errors.username && (
                                                    <small className={classes.errors}>{errors.username}</small>
                                                )}
                                            </label>
                                      </div>

                                      <div className="col">
                                          <label htmlFor="email" className="form-label text-white">Email addres</label>
                                          <input type="text" 
                                                 className="form-control" 
                                                 id="email" 
                                                 name="email" 
                                                 value={email}
                                                 onChange={onChangeEmail}
                                                 validations={[required, validEmail]}
                                                 placeholder="Enter your email" required /> 
                                            {/* <label>
                                                 {errors.email && (
                                                     <small className={classes.errors}>{errors.email}</small>
                                                 )}
                                             </label> */}
                                      </div>
                                  </div>
                              </div>

                              <div className="mb-3">
                                  <div className="row">
                                      <div className="col">
                                          <label htmlFor="firstName" className="form-label text-white">First Name</label>
                                          <input type="text" 
                                                 className="form-control" 
                                                 id="firstName" 
                                                 name="firstName"
                                                 value={firstName} 
                                                 onChange={onChangeFirstName}
                                                 placeholder="Enter your first name" />    
                                            {/* <label>
                                                 {errors.firstName && (
                                                     <small className={classes.errors}>{errors.firstName}</small>
                                                 )}
                                             </label> */}
                                       </div>
                                      <div className="col">
                                          <label htmlFor="lastName" className="form-label text-white">Last Name</label>
                                          <input type="text" 
                                                 className="form-control" 
                                                 id="lastName" 
                                                 name="lastName" 
                                                 value={lastName}
                                                 onChange={onChangeLastName}
                                                 placeholder="Enter your last name" />
                                            {/* <label>
                                                 {errors.lastName && (
                                                     <small className={classes.errors}>{errors.lastName}</small>
                                                 )}
                                             </label> */}
                                     </div>
                                  </div>
                              </div>  

                              <div className="mb-3">
                                  <label htmlFor="phoneNumber" className="form-label text-white">Phone Number</label>
                                  <input type="tel" 
                                         className="form-control" 
                                         id="phoneNumber" 
                                         name="phoneNumber" 
                                         value={phoneNumber}
                                         onChange={onChangePhoneNumber}
                                         placeholder="Enter your phone number" />
                                  {/* <label>
                                         {errors.phoneNumber && (
                                              <small className={classes.errors}>{errors.phoneNumber}</small>
                                          )}
                                  </label> */}
                                </div>

                              <div className="mb-3">
                                  <label htmlFor="address" className="form-label text-white">Address</label>
                                  <input type="text" 
                                         className="form-control" 
                                         id="address" 
                                         name="address"
                                         value={address} 
                                         onChange={onChangeAddress}
                                         placeholder="Enter your address" />
                              </div>

                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label text-white">Password</label>
                                  <input type="password" 
                                         className="form-control" 
                                         id="password" 
                                         name="password" 
                                         value={password}
                                         onChange={onChangePassword}
                                         validations={[required, vpassword]}
                                         placeholder="Enter your password" />
                                     {/* <label htmlFor="password" className="form-label text-white">
                                         {errors.password && (
                                             <small className={classes.errors}>{errors.password}</small>
                                         )}
                                     </label> */}
                              </div>

                              <div className="mb-3">
                                  <label htmlFor="confirmPassword" className="form-label text-white">
                                           {!confirmPassword && (
                                              <span>Confirm Password</span>
                                          )}          
                                  </label>
                                  <input type="password" 
                                         className="form-control" 
                                         id="confirmPassword" 
                                         name="confirmPassword" 
                                         value={confirmPassword}
                                         onChange={onChangeConfirmPassword}
                                         placeholder="Confirm your password" />
                                    {/* <label>
                                         {errors.confirmPassword && (
                                             <small className={classes.errors}>{errors.confirmPassword}</small>
                                         )}       
                                     </label> */}
                                
                              </div>
                              <div className="d-grid gap-2 justify-content-center">
                                  <button type="submit" className={classes.button} >
                                      Create Account
                                  </button>
                              </div>
                              </div>
                              )} 


                              {message && (
                                <div className="form-group">
                                  <div
                                    className={
                                      successful ? "alert alert-success" : "alert alert-danger"
                                    }
                                    role="alert"
                                  >
                                    {message}
                                  </div>
                                </div>
                              )}
                              <button style={{ display: "none" }} ref={checkBtn} ></button>
                              {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
                                
}

  export default RegisterForm;
        
   