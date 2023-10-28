
import Logo from '../logo/Logo'
import MainButton from "../button/MainButton";
import React from "react";
function StaticNavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#252525", width: "100%"}}>
            <div className="container-fluid">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/login">Post Offer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/shop">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <MainButton value="Search" href="#"/>
                    </form>
                    <div className="me-2 p-2">
                        <MainButton  value="Login" href="/login"/>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default StaticNavBar;