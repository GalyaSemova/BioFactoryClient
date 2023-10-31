import React, { useEffect, useState } from "react";


import MainButton from "./button/MainButton";
import Logo from "./logo/Logo";

function NavBar(){
    const [scrolling, setScrolling] = useState(false);

    // change bg upon scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // clean the ev list.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrolling ? "#252525" : "rgba(0, 0, 0, 0.5)",
        transition: "background-color 0.3s ease",
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navbarStyle}>
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
                            <a className="nav-link text-white" href="/add-offer">Post Offer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/shop">Store</a>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle text-white" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">*/}
                        {/*        Store*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*        <li><a className="dropdown-item" href="/shop">Bio Products</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="/shop">Handmade Products</a></li>*/}
                        {/*        <li><hr className="dropdown-divider" /></li>*/}
                        {/*        <li><a className="dropdown-item" href="/shop">Something else here</a></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
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
                    <div className="me-2 p-2">
                        <MainButton  value="Logout" href="/login"/>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;