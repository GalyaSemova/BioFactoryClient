
import './App.css';
import React, { useState, useEffect } from "react";

// pages && components
import Home from '../src/pages/home/Home';
import NotFoundPage from './pages/404/NotFoundPage';
import SearchResultPage from './pages/searchResult/SearchResultPage';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import Dashboard from "./pages/userDashboard/Dashboard";
import AddOffer from './pages/addOffer/AddOffer';
import ProtectedRoutesUser from './security/protectedRoutes/ProtectedRoutesUser';
import ProductPage from './pages/singleProductPage/ProductPage';

import { Routes, Route } from "react-router-dom";

// import { BrowserRouter as Routes, Route } from 'react-router-dom';



function App() {

  return (

    <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/404" element={<NotFoundPage/>}/>
            <Route path="/searches" element={<SearchResultPage/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/shop" element={<Products/>}/>
            <Route path="/shop/:categoryName" element={<Products />} />
            <Route path="/shop/product/:id" element={<ProductPage />} />
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            {/* <Route element={ProtectedRoutesUser}>
               <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Route> */}
            <Route exact path="/add-offer" element={<AddOffer/>}/> 
        </Routes>
    </div>
      
  );
}

export default App;
