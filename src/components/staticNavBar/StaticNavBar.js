import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { request } from "../../utils/AxiosHelper";


import Logo from '../logo/Logo'
import MainButton from "../button/MainButton";

import AuthService from "../../services/AuthService";

function StaticNavBar() {


    const [currentUser, setCurrentUser] = useState(undefined);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

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

    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#252525", width: "100%"}}>
            <div className="container-fluid">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/#">Home</a>
                        </li> */}
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                                <Link to={"/dashboard"} className="nav-link text-white ">
                                    Welcome, {currentUser.username}
                                </Link>
                                </li> */}
                                <li className="nav-item">
                                  <a className="nav-link text-white" href="/shop">Store</a>
                               </li>
                            </div>
                            ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                  <a className="nav-link text-white" href="/shop">Store</a>
                               </li>
                            </div>
                            )}
                        {/* <li className="nav-item">
                            <a className="nav-link text-white" href="/login">Post Offer</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link text-white" href="/shop">Store</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    
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
                        placeholder="Find your product"
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
}

export default StaticNavBar;