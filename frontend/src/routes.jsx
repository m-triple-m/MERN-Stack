import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import StateManagement from './pages/StateManagement';

const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/signup' Component={Signup} />
                <Route path='/login' Component={Login} />
                <Route path='/state-management' Component={StateManagement} />
            </Routes>
        </>
    )
}

export default MyRoutes;