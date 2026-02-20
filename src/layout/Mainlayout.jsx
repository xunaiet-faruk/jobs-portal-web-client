import React from 'react';
import Navbar from '../component/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/footer';

const Mainlayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;