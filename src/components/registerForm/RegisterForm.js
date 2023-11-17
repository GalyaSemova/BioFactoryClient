import classes from './RegisterForm.module.css'

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from 'react-bootstrap';


import AuthService from "../../services/AuthService";


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


  const [fieldErrors, setFieldErrors] = useState({});

  
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

    AuthService.register(username, email, password, confirmPassword, firstName, lastName, address, phoneNumber)
      .then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          navigate("/login");
          window.location.reload();
        },
        (error) => {
          console.error("Registration error:", error.response ? error.response.data : error.message);

          // Handle validation errors from the backend
          if (error.response && error.response.data) {
            setFieldErrors(error.response.data);
          }

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
  };

  return (
    <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white mb-lg-3" >Register</h5>   
                            <Form ref={form} onSubmit={handleRegister}>
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
                              {!successful && (
                                <div>
                                  <div className="mb-3">
                                  <div className="row">
                                    <div className="col">
                                      <label htmlFor="username" className="form-label text-white">Username</label>
                                        <input type="text" 
                                                 className={`form-control ${
                                                    fieldErrors.username ? "is-invalid" : ""
                                                  }`}
                                                  id="username" 
                                                  name="username" 
                                                  value={username}
                                                  onChange={onChangeUsername}
                                                  placeholder="Enter your Username" 
                                                /> 
                                                {fieldErrors.username && (
                                                  <div style={{ color: 'red', fontSize: '12px' }}>
                                                    {fieldErrors.username}
                                                  </div>
                                                )}
                                      </div>

                                      <div className="col">
                                          <label htmlFor="email" className="form-label text-white">Email addres</label>
                                          <input type="text"  
                                                  className={`form-control ${
                                                    fieldErrors.email ? "is-invalid" : ""
                                                  }`}
                                                  id="email" 
                                                  name="email" 
                                                  value={email}
                                                  onChange={onChangeEmail}
                                                  placeholder="Enter your email" required 
                                                 />  
                                                  {fieldErrors.email && (
                                                    <div style={{ color: 'red', fontSize: '12px' }}>
                                                      {fieldErrors.email}
                                                    </div>
                                                  )}                 
                                      </div>
                                  </div>
                              </div>

                              <div className="mb-3">
                                  <div className="row">
                                      <div className="col">
                                          <label htmlFor="firstName" className="form-label text-white">First Name</label>
                                          <input type="text" 
                                                 className={`form-control ${
                                                    fieldErrors.firstName ? "is-invalid" : ""
                                                  }`}
                                                  id="firstName" 
                                                  name="firstName"
                                                  value={firstName} 
                                                  onChange={onChangeFirstName}
                                                  placeholder="Enter your first name" 
                                                 />    
                                                 {fieldErrors.firstName && (
                                                  <div style={{ color: 'red', fontSize: '12px' }}>
                                                    {fieldErrors.firstName}
                                                  </div>
                                                )}  
                                      </div>
                                      <div className="col">
                                          <label htmlFor="lastName" className="form-label text-white">Last Name</label>
                                          <input type="text" 
                                                 className={`form-control ${
                                                    fieldErrors.lastName ? "is-invalid" : ""
                                                  }`}
                                                  id="lastName" 
                                                  name="lastName" 
                                                  value={lastName}
                                                  onChange={onChangeLastName}
                                                  placeholder="Enter your last name" 
                                                 /> 
                                                 {fieldErrors.lastName && (
                                                  <div style={{ color: 'red', fontSize: '12px' }}>
                                                    {fieldErrors.lastName}
                                                  </div>
                                                )}
                                    </div>
                                  </div>
                              </div>  

                              <div className="mb-3">
                                  <label htmlFor="phoneNumber" className="form-label text-white">Phone Number</label>
                                  <input type="tel" 
                                          className={`form-control ${
                                            fieldErrors.phoneNumber ? "is-invalid" : ""
                                          }`}
                                          id="phoneNumber" 
                                          name="phoneNumber" 
                                          value={phoneNumber}
                                          onChange={onChangePhoneNumber}
                                          placeholder="Enter your phone number" 
                                         />  
                                         {fieldErrors.phoneNumber && (
                                          <div style={{ color: 'red', fontSize: '12px' }}>
                                            {fieldErrors.phoneNumber}
                                          </div>
                                        )}
                               </div>

                              <div className="mb-3">
                                  <label htmlFor="address" className="form-label text-white">Address</label>
                                  <input type="text" 
                                        className={`form-control ${
                                            fieldErrors.address ? "is-invalid" : ""
                                          }`}
                                          id="address" 
                                          name="address"
                                          value={address} 
                                          onChange={onChangeAddress}
                                          placeholder="Enter your address" 
                                         /> 
                                         {fieldErrors.address && (
                                          <div style={{ color: 'red', fontSize: '12px' }}>
                                            {fieldErrors.address}
                                          </div>
                                        )}
                              </div>

                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label text-white">Password</label>
                                  <input type="password" 
                                        className={`form-control ${
                                            fieldErrors.confirmPassword ? "is-invalid" : ""
                                          }`}
                                          id="password" 
                                          name="password" 
                                          value={password}
                                          onChange={onChangePassword}
                                          placeholder="Enter your password" 
                                         />  
                                         {fieldErrors.password && (
                                          <div style={{ color: 'red', fontSize: '12px' }}>
                                            {fieldErrors.password}
                                          </div>
                                        )}
                              </div>

                              <div className="mb-3">
                                  <label htmlFor="confirmPassword" className="form-label text-white">
                                           {!confirmPassword && (
                                              <span>Confirm Password</span>
                                          )}          
                                  </label>
                                  <input type="password" 
                                         className={`form-control ${
                                            fieldErrors.confirmPassword ? "is-invalid" : ""
                                          }`}
                                          id="confirmPassword" 
                                          name="confirmPassword" 
                                          value={confirmPassword}
                                          onChange={onChangeConfirmPassword}
                                          placeholder="Confirm your password" 
                                         /> 
                                         {fieldErrors.confirmPassword && (
                                          <div style={{ color: 'red', fontSize: '12px' }}>
                                            {fieldErrors.confirmPassword}
                                          </div>
                                        )}
                             </div>
                              <div className="d-grid gap-2 justify-content-center">
                                  <button type="submit" className={classes.button} >
                                      Create Account
                                  </button>
                              </div>
                              </div>
                              )} 
                              <button style={{ display: "none" }} ref={checkBtn} ></button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
                                
}

  export default RegisterForm;
        
   