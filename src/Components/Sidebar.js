import React from 'react';
import '../App.css';

function Sidebar() {
  const sidebarData = [
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  const linkNames = ["Dashboard", "Widgets", "Reviews", "Customers", "Online Analysis", "Settings"];

  const sidebarLinks = sidebarData.map((link, index) => (
    <div key={index} className='sidebar-container'>
      <a href="https://www.somewebsite.com">{linkNames[index]}</a>
    </div>
  ));
  
  return (
    <div className='Sidebar'>
      <h2 className='sidebarHeader'>Sidebar</h2>
      {sidebarLinks}
    </div>
  );
}

export default Sidebar;
