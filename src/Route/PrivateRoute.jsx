import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Proveider/Proveider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();
    console.log(location)
    if (user) {
        return children;
    }

  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;