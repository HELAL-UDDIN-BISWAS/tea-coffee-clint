import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Proveider/Proveider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from "keep-react";

const PrivateRoute = ({children}) => {
      
        const {user,loding}=useContext(AuthContext);
    const location=useLocation();
     if(loding){
      return <Spinner className='flex h-[90vh] text-center items-center justify-center max-w-6xl mx-auto' color="info" size="lg" />
    }
    console.log(location)
    if (user) {
        return children;
    }

  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;