// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Placeholder for nested routes
import Navbar from './Navbar';
import Header from './feature/Header';
import Footer from './feature/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
