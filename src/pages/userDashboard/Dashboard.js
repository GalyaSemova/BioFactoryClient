import React, { useState, useEffect } from "react";

import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import MainButton from "../../components/button/MainButton";

import AuthService from "../../services/AuthService";
import { request } from "../../utils/AxiosHelper"

// func helper for finding the user data

 const getUserById = (userId) => {
    const endpoint = `/users/${userId}`;
    return request('GET', endpoint);
  };

  const getProductsById = (userId) => {
    const endpoint = `/products/${userId}/all`;
    return request('GET', endpoint);
  };


function Dashboard() {

    const [activeTab, setActiveTab] = useState("profile");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    // Profile
    const currentUser = AuthService.getCurrentUser();

    const [userData, setUserData] = useState({});
    const [productsData, setProductsData] = useState([]);

    // find a user data by currentUser Id

    useEffect(() => {

      if (currentUser) {
        // fetch user data
        getUserById(currentUser.id)
          .then((response) => {
           
            setUserData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });

        // Fetch product data
        getProductsById(currentUser.id)
        .then((response) => {
          setProductsData(response.data);
        })
        .catch((error) => {
        console.error('Error fetching product data:', error);
        });
    }
      
  }, []);

    
    return (
        <div className="container-fluid container-fluid-custom pb-5 mb-5">
            <div>
                <StaticNavBar/>
            </div>
            <div className="row m-lg-4">
                <div className="m-lg-2">
                    <div>
                        <div className="col">
                            <h1>Hey, <strong>{userData?.username}</strong></h1>
                        </div>
                        <div className="col text-end">
                            <MainButton href="dashboard/add" value="+ New Offer"/>
                            {/*<a href="/dashboard/add" className="btn btn-primary">+ New Offer</a>*/}
                        </div>   
                        <div className="col d-flex align-items-left">
                        <MainButton href="#"
                                    value="Profile"
                                    className={`m-2 ${activeTab === "profile" ? "active" : ""}`}
                                    onClick={() => handleTabClick("profile")}
                        />  
                        <MainButton href="#" 
                                    value="My Offers" 
                                    className={`m-2 ${activeTab === "offers" ? "active" : ""}`}
                                    onClick={() => handleTabClick("offers")}
                        />  
                    </div> 
                    </div>
                  
            
                    <div className="container">
                        {/* Render content based on the active tab */}
                        {activeTab === "profile" && (
                        <div>
                        
                            <h2>Profile Content</h2>
                         

                        <header className="jumbotron">
                          <h3>
                            <strong>{userData.username}</strong> Profile
                          </h3>
                        </header>
                        {/* TODO add Name , address and phone .fields */}
                            {/* <p>
                                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                            </p> */}
                            {/* <p>
                                <strong>Id:</strong> {userData?.id}
                            </p> */}
                            <p>
                                <strong>Username:</strong> {userData?.username}
                            </p>
                            <p>
                                <strong>Email:</strong> {userData?.email}
                            </p>
                            <p>
                                <strong>First Name:</strong> {userData?.firstName}
                            </p>
                            <p>
                                <strong>Last Name:</strong> {userData?.lastName}
                            </p>
                            <p>
                                <strong>Phone Number:</strong> {userData?.phoneNumber}
                            </p>
                            <p>
                                <strong>Address:</strong> {userData?.address}
                            </p>
                        {/* For testing the token */}
                            {/* <strong>Authorities:</strong>
                            <ul>
                                {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                            </ul>   */}
                        </div>
                    )} 


                        {activeTab === "offers" && (
                            <div className="container">
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price(EUR)</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {productsData.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td>{product.imageUrl}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>{product.description}</td>
                                        <td className="d-flex">
                                            {/* <MainButton href={`/edit/${product.id}`} value="Edit" />
                                            <MainButton href={`/delete/${product.id}`} value="Delete" /> */}
                                        </td>
                                    </tr>
                                    ))}            
                                </tbody>
                                </table>
                            </div>
                        )} 
                </div>  
            </div>
            
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>

    );

}

export default Dashboard;
