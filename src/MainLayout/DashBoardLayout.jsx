import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex mx-auto w-[90%] my-11'>
            <div className='w-[30%] h-full'><Sidebar></Sidebar></div>
            <div className='w-[60%]'><Outlet></Outlet></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;