// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ScrollToTop from './components/base/ScrollToTop';

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs/>} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
