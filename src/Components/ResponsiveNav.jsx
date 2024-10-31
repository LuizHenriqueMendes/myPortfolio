// ResponsiveNav.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import '../Styles/ResponsiveNav.css';

function ResponsiveNav() {
  return (
    <div>
      <Sidebar className="sidebar-desktop" />
      <Header className="header-mobile" />
    </div>
  );
}

export default ResponsiveNav;
