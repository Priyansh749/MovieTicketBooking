import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './About'
import Navbar from './Navbar.jsx'
import Routes from './Routes.jsx'
import { createBrowserRouter } from 'react-router-dom';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes></Routes>
  </React.StrictMode>,
)
