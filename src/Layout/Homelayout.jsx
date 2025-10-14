import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Home_components/Navbar';
import Footer from '../Home_components/Footer';

const Homelayout = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;