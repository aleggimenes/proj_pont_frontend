import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button'
import Input from './components/Input';
import Card from './components/Card';
import { Image } from './components/Image/styles';
import list from './assets/list.jpg'
import Login from './pages/login';
import Rotas from './routes'
function App() {
  return (
    <div>
      <Rotas/>
    </div>
  );
}

export default App;
