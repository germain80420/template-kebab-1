import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Home from "./pages/Home"
import Menus from './pages/Menus';
import ALaCarte from './pages/ALaCarte';
import APropos from './pages/APropos';
import Header from './components/Header';
import BoissonsEtDesserts from './pages/BoissonsEtDesserts';
import Footer from './components/Footer';
import Contact from './pages/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/a-la-carte" element={<ALaCarte />} />
        <Route path="/boissons-et-desserts" element={<BoissonsEtDesserts />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

