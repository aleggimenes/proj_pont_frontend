import React from 'react';
import { BrowserRouter, Route, Routes, Redirect, Switch } from 'react-router-dom';
import BemVindo from './components/BemVindo';
import Login from './pages/login';
import Logado from './pages/logado';
import Register from './pages/register';
import Editar from './pages/editarPerfil';
const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}>
                <Route index element={<Login />} />
                <Route path="logado" element={<Logado />} />
                <Route path="register" element={<Register />} />
                <Route path="editar" element={<Editar />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Rotas;