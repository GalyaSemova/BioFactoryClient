import classes from './RegisterForm.module.css'

import MainButton from "../button/MainButton";


function RegisterForm() {
    return(
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white mb-lg-3" >Register</h5>
                            <form>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="firstName" className="form-label text-white">First Name</label>
                                            <input type="text" className="form-control" id="firstName" name="first_name" placeholder="Enter your first name" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lastName" className="form-label text-white">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" name="last_name" placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-white">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phoneNumber" className="form-label text-white">Phone Number</label>
                                    <input type="tel" className="form-control" id="phoneNumber" name="phone_number" placeholder="Enter your phone number" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label text-white">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter your address" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-white">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" name="confirm_password" placeholder="Confirm your password" required />
                                </div>
                                <div className="d-grid gap-2 justify-content-center">
                                    <MainButton value="Create Account" href="/"/>
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