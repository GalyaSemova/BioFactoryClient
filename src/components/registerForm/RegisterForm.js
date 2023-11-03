import classes from './RegisterForm.module.css'

import MainButton from "../button/MainButton";
import RegistrationAppUserService from '../../security/registration/RegistrationAppUserService';

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterForm() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const [error, setError] = useState(false);
    const [info, setInfo] = useState({
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

          if (!info.username) {
            errors.username = "Username is required";
          } else if (info.username.length < 5 || info.username.length > 30) {
            errors.username = "Username must be between 4 and 30 characters";
          }

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(info.email)) {
            errors.email = "Invalid email address";
          }
      
          if (!info.firstName) {
            errors.firstName = "First Name is required";
          } else if (info.firstName.length < 2 || info.firstName.length > 20) {
            errors.firstName = "First name must be between 2 and 20 characters";
          }
          if (!info.lastName) {
            errors.lastName = "Last Name is required";
          } 

          if(!info.phoneNumber) {
            errors.phoneNumber = "Phone number is required";
          } else if(info.phoneNumber.length < 10 || info.phoneNumber.length > 15) {
            errors.phoneNumber = "Phone number must be between 10 and 15 digits";
          }
      
      
          if (!info.password) {
            errors.password = "Password is required";
          }
          if (!info.confirmPassword) {
            errors.confirmPassword = "Confirm your password";
          }
          if (info.password !== info.confirmPassword) {
            errors.confirmPassword = "Passwords don't match";
          }
      
          return errors;
        };   


        const submitHandler = async (event) => {
            event.preventDefault();
            let errors = validate(info);
            setErrors(errors);
        
            if (Object.keys(errors).length === 0) {
              console.log(info);
              setLoading(true);
              await RegistrationAppUserService(info)
                .then((response) => {
                  if (response.status === 201) {
                    navigate("/login");
                  }
                })
                .catch((err) => {
                  setError(true);
                  setLoading(false);
                });
            } else {
              console.log(errors);
            }
          };




    return(
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white mb-lg-3" >Register</h5>
                            {error && (
                                <div className={classes.errors}>
                                    This username or email already exist.
                                </div>
                                )}
                            

                            <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="username" className="form-label text-white">Username</label>
                                            <input type="text" 
                                                  className="form-control" 
                                                  id="username" 
                                                  name="username" 
                                                  onChange={(e) => setInfo({ ...info, username: e.target.value })}
                                                  placeholder="Enter your Username" />
                                            <label> 
                                                {errors.username && (
                                                    <small className={classes.errors}>{errors.username}</small>
                                                )}
                                            </label>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="email" className="form-label text-white">Email addres</label>
                                            <input type="email" 
                                                   className="form-control" 
                                                   id="email" 
                                                   name="email" 
                                                   onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                                   placeholder="Enter your email" required />
                                            <label>
                                                {errors.email && (
                                                    <small className={classes.errors}>{errors.email}</small>
                                                )}
                                            </label>
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
                                                   onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                                                   placeholder="Enter your first name" />
                                            <label>
                                                {errors.firstName && (
                                                    <small className={classes.errors}>{errors.firstName}</small>
                                                )}
                                            </label>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lastName" className="form-label text-white">Last Name</label>
                                            <input type="text" 
                                                   className="form-control" 
                                                   id="lastName" 
                                                   name="lastName" 
                                                   onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                                                   placeholder="Enter your last name" />
                                            <label>
                                                {errors.lastName && (
                                                    <small className={classes.errors}>{errors.lastName}</small>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label text-white">Phone Number</label>
                                    <input type="tel" 
                                           className="form-control" 
                                           id="phoneNumber" 
                                           name="phoneNumber" 
                                           onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
                                           placeholder="Enter your phone number" />
                                    <label>
                                           {errors.phoneNumber && (
                                                <small className={classes.errors}>{errors.phoneNumber}</small>
                                            )}
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label text-white">Address</label>
                                    <input type="text" 
                                           className="form-control" 
                                           id="address" 
                                           name="address" 
                                           onChange={(e) => setInfo({ ...info, address: e.target.value })}
                                           placeholder="Enter your address" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-white">Password</label>
                                    <input type="password" 
                                           className="form-control" 
                                           id="password" 
                                           name="password" 
                                           onChange={(e) => setInfo({ ...info, password: e.target.value })}
                                           placeholder="Enter your password" />
                                    <label htmlFor="password" className="form-label text-white">
                                        {errors.password && (
                                            <small className={classes.errors}>{errors.password}</small>
                                        )}
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label text-white">
                                             {!errors.confirmPassword && (
                                                <span>Confirm Password</span>
                                            )}          
                                    </label>
                                    <input type="password" 
                                           className="form-control" 
                                           id="confirmPassword" 
                                           name="confirmPassword" 
                                           onChange={(e) =>
                                            setInfo({ ...info, confirmPassword: e.target.value })
                                          }
                                           placeholder="Confirm your password" />
                                    <label>
                                        {errors.confirmPassword && (
                                            <small className={classes.errors}>{errors.confirmPassword}</small>
                                        )}       
                                    </label>
                                </div>
                                <div className="d-grid gap-2 justify-content-center">
                                    {/* <MainButton value="Create Account" href="/login"/> */}
                                    <button type="submit" >
                                        Create Account
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default RegisterForm;