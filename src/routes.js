import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';

import Login from './pages/login';
const Rotas = () => (
    <BrowserRouter>
    <Login/>
        <Routes>
            <Route path="/login"  component={Login} />
            <Route path="/"  component={Login} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;