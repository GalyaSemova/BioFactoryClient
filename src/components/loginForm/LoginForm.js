import classes from './LoginForm.module.css'

import MainButton from "../button/MainButton";
// import {Button} from "reactstrap";

function LoginForm() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white">Login</h5>
                            <form className="mb-lg-2">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-white">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-white">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                </div>
                                <div className="d-grid gap-2 justify-content-center">
                                    {/*<div className="row mb-4">*/}
                                    {/*    <div>*/}
                                    {/*        <div className="form-check">*/}
                                    {/*            <input className="form-check-input" type="checkbox" value=""*/}
                                    {/*                   id="form2Example31" checked/>*/}
                                    {/*            <label className="form-check-label" htmlFor="form2Example31">*/}
                                    {/*                Remember me*/}
                                    {/*            </label>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="col">*/}
                                    {/*        <a href="#">Forgot password?</a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <MainButton value="Login" href="/"/>
                                    {/*<button type="submit" className="btn btn-primary" style = {{*/}
                                    {/*    backgroundColor: "#008000",*/}
                                    {/*}}>Login</button>*/}
                                </div>
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