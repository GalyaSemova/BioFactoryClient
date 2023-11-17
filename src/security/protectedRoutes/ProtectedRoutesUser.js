import React from 'react';
import AuthService from '../../services/AuthService';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



const useAuth = () => {
  return AuthService.isLoggedIn();
};
const ProtectedRoutesUser = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
  
 export default ProtectedRoutesUser;
// import { Outlet, Navigate } from 'react-router-dom'

// const ProtectedRoutesUser = () => {
//     let auth = {'token': false}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/login"/>
//     )
// }

// export default ProtectedRoutesUser;