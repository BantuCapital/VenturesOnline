import React from 'react';
import './App.css';
import classNames from 'classnames';
import SideBar from './SideNav'

const MenuItems = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    
  },
  {
    name: 'settings',
    label: 'Settings',
   
  },
]

function App() {
  const bgClass = classNames('mainContainer', 'mainOverlay')
  return (
    <div className={bgClass}>
      <SideBar items={MenuItems}/>
    </div>
  );
}

export default App;
