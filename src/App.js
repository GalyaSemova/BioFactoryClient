
import './App.css';

// pages && components
import Home from '../src/pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import Dashboard from "./pages/userDashboard/Dashboard";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/shop" element={<Products/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>

        </Routes>
      </Router>
  );
}

export default App;
