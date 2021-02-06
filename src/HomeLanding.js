import React from 'react';
import './App.css';
import classNames from 'classnames';
import SideNav from './SideNav';
import { Home, Business, MeetingRoom, LocalLibrary, Group } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SpacingGrid from './Containers';



const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },});

const MenuItems = [
  { 
    name: 'home', 
    label: 'Home',
    icon: <Home/>,
  },
  {
    name: 'ventures',
    label: 'Ventures',
    icon: <Business/>,
    
  },
  {
    name: 'startup',
    label: 'Start Up',
    icon: <MeetingRoom/>,
   
  },
  {
    name: 'accelerate',
    label: 'Accelerate',
    icon: <LocalLibrary/>,
    
  },
  {
    name: 'community',
    label: 'Community',
    icon: <Group/>
  },
  {
    name: 'chat',
    label: 'Chat',
    icon: <Group/>
  },
  {
    name: 'my tasks',
    label: 'My Tasks',
    icon: <Group/>
  },
  {
    name: 'content centre',
    label: 'Content Centre',
    icon: <Group/>
  },
  {
    name: 'service providers',
    label: 'Service Providers',
    icon: <Group/>
  },
  {
    name: 'coaching',
    label: 'Coaching',
    icon: <Group/>
  },
  {
    name: 'dealflow',
    label: 'DealFlow',
    icon: <Group/>
  },
  {
    name: 'events',
    label: 'Events',
    icon: <Group/>
  }
]

function App() {
  const bgClass = classNames('mainContainer', 'mainOverlay')
  return (
    <ThemeProvider theme={theme}>
      <div className={bgClass}>
        <SideNav items={MenuItems} user="Tom"/>
        <SpacingGrid/>
      </div>
    </ThemeProvider>
  );
}

export default App;
