import React from 'react';
import './App.css';
import classNames from 'classnames';
import { Link } from "react-router-dom"
import SideNav from './SideNav';
import { Home, Business, MeetingRoom, LocalLibrary, Group } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BusinessProfile from './BusinessProfile';
import FullWidthGrid from './HomeContainers';


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
    label: <Link to="businessprofile">Home</Link>,
    icon: <Home/>,
  },
  {
    name: 'ventures',
    label: 'Ventures',
    icon: <Business/>,
    
  },
  {
    name: 'startup',
    label: <Link to="learningcontent">Start up</Link>,
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
    label:'Content Centre',
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
    <Router>
      <ThemeProvider theme={theme}>
        <div className={bgClass}>
          <SideNav items={MenuItems} user="Tom"/>
          <div className="navigation">
            <Switch>
                <Route exact path="/">
                  <FullWidthGrid/>
                </Route>
                <Route path="/businessprofile">
                  <BusinessProfile/>
                </Route>
                <Route path="/learningcontent">
                  <LearningContent/>
                </Route>
              </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>  
  );
}

export default App;
