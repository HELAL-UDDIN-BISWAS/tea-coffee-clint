import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Shared/Navber/Navber';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;