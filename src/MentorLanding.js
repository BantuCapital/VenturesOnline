import React from 'react';
import './App.css';
import classNames from 'classnames';
import SideBar from './SideNav';
import { Home, Business, MeetingRoom, LocalLibrary, Group } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


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
    name: 'meetings',
    label: 'Meetings',
    icon: <MeetingRoom/>,
   
  },
  {
    name: 'learning content',
    label: 'Learning Content',
    icon: <LocalLibrary/>,
    
  },
  {
    name: 'ecosystem centre',
    label: 'Ecosystem Centre',
    icon: <Group/>
  }
]

function App() {
  const bgClass = classNames('mainContainer', 'mainOverlay')
  return (
    <ThemeProvider theme={theme}>
      <div className={bgClass}>
        <SideBar items={MenuItems}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
