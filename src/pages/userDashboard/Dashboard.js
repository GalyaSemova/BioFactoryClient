import React, { useState } from "react";

import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import MainButton from "../../components/button/MainButton";

import AuthService from "../../services/AuthService";


function Dashboard() {

    const [activeTab, setActiveTab] = useState("profile");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    // Profile
    const currentUser = AuthService.getCurrentUser();

    
    return (
        <div className="container-fluid container-fluid-custom pb-5 mb-5">
            <div>
                <StaticNavBar/>
            </div>
            <div className="row m-lg-4">
                <div className="m-lg-2">
                    <div>
                        <div className="col">
                            <h1>Hey, <strong>{currentUser.username}</strong></h1>
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
                  
                    {/* <div className="col d-flex align-items-left">
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
                    </div>  */}

                    <div className="container">
                        {/* Render content based on the active tab */}
                        {activeTab === "profile" && (
                        <div>
                        
                            <h2>Profile Content</h2>
                         

                        <header className="jumbotron">
                          <h3>
                            <strong>{currentUser.username}</strong> Profile
                          </h3>
                        </header>
                        {/* TODO add Name , address and phone .fields */}
                            <p>
                                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                            </p>
                            <p>
                                <strong>Id:</strong> {currentUser.id}
                            </p>
                            <p>
                                <strong>Username:</strong> {currentUser.username}
                            </p>
                            <p>
                                <strong>Email:</strong> {currentUser.email}
                            </p>
                        
                            <strong>Authorities:</strong>
                            <ul>
                                {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                            </ul>  
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
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Handbag</td>
                                    <td>URL</td>
                                    <td>5</td>
                                    <td>300</td>
                                    <td>The Best Product</td>
                                    <td className="d-flex">
                                        <MainButton href="" value="Edit" />
                                        <MainButton href="" value="Delete" />
                                    </td>
                                    </tr>
                                    {/* Add more rows for offers if needed */}
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
