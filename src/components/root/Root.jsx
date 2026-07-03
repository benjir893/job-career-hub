import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';

const Root = () => {
    return (
        <div className='p-4 mx-10 my-5'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;