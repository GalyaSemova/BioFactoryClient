
import './App.css';
import React, { useState, useEffect } from "react";

// pages && components
import Home from '../src/pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import Dashboard from "./pages/userDashboard/Dashboard";
import AddOffer from './pages/addOffer/AddOffer';
import ProtectedRoutesUser from './security/protectedRoutes/ProtectedRoutesUser';

import { Routes, Route } from "react-router-dom";



function App() {

  return (

    <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/shop" element={<Products/>}/>
            <Route path="/shop/:categoryName" element={<Products />} />
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/add-offer" element={<AddOffer/>}/> 
        </Routes>
    </div>
      
  );
}

export default App;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     ...
//   );
// }

// export default App;
