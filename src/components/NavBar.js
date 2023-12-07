import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import MainButton from "./button/MainButton";
import Logo from "./logo/Logo";
import { request } from "../utils/AxiosHelper";

import AuthService from "../services/AuthService";

function NavBar(){
    const [scrolling, setScrolling] = useState(false);

    // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    // const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
// For the test
    // const products = [
    //     { _id: "1", title: "Product 1" },
    //     { _id: "2", title: "Product 2" },
    //   ];
  
    const handleSearch = async () => {
        try {
          // Fetch all products
          const apiSearchEndpoint = '/products/all';
          const response = await request('GET', apiSearchEndpoint);
    
          const products = response.data;

          const results = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
          setSearchResults(results);
    
          if (results.length > 0) {
            // Navigate to search results page
            navigate("/searches", { state: { searchResults: results } });
          } else {
            // Navigate to 404 page if no results
            navigate("/404");
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
    //   const handleSearch = () => {

    //     console.log("Handling search...");

    //     const results = products.filter((product) =>
    //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     );

    //     console.log("Search Query:", searchQuery);
    //     console.log("Search Results:", results);
    
    //     setSearchResults(results);
    
    //     if (results.length > 0) {
    //         console.log("Navigating to /searches");
    //       // Navigate to search results page
    //       navigate("/searches", { state: { searchResults: results } });
    //     } else {
    //         console.log("Navigating to /404");
    //       // Navigate to 404 page if no results
    //       navigate("/404");
    //     }
    //   };


    useEffect(() => {
      const user = AuthService.getCurrentUser();
      
  
      if (user) {
        setCurrentUser(user);
        // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      }
    }, []);
  
    const logOut = () => {
      AuthService.logout();
      navigate("/");
    };

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

                        
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/dashboard"} className="nav-link text-white ">
                                        Welcome, {currentUser.username}
                                    </Link>
                                </li>
                                 <li className="nav-item">
                                    <a className="nav-link text-white" href="/add-offer">Post Offer</a>
                                </li>
                            </div>
                            ) : (
                            <div className="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                                </li>

                                <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link> */}
                                {/* </li> */}
                            </div>
                            )}
                            
                      
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
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    {/* SEARCH BY PRODUCT NAME */}

                    <form
                        className="d-flex"
                        onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                        }}
                    >
                        <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search by product name"
                        aria-label="Search"
                        onChange={(e) => {
                            // console.log("Input value:", e.target.value);
                            setSearchQuery(e.target.value);
                          }}
                        />
                        <MainButton type="button" value="Search" onClick={handleSearch} />
                    </form>

                    {currentUser ? (
                            <div className="navbar-nav ml-auto">

                                <li className="nav-item">
                                  <div className="me-2 p-2">
                                    <MainButton  value="Logout" href="/" onClick={logOut}/>
                                   </div>
                                </li>
                            </div>
                            ) : (
                            <div className="navbar-nav">
                                <div className="me-2 p-2">
                                    <MainButton  value="Login" href="/login"/>
                                </div>
                            </div>
                            )}
                </div>
            </div>
        </nav>

    );
};

export default NavBar;