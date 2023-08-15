import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Categories from './components/Categories.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
