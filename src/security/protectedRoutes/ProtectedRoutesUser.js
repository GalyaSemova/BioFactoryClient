import React from 'react';
import AuthenticationService from '../authentication/AuthenticationService';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



const useAuth = () => {
  return AuthenticationService.isUserLoggedIn();
};
const ProtectedRoutesUser = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
  
 export default ProtectedRoutesUser;