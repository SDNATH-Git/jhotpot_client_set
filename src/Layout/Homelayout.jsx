import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Home_components/Navbar';
import Footer from '../Home_components/Footer';
import ChatBoth from '../AIchatBoth/ChatBoth';

const Homelayout = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar></Navbar>
            <ChatBoth></ChatBoth>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;