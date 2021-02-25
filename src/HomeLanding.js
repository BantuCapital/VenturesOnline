import React from 'react';
import './App.css';
import classNames from 'classnames';
import { Link } from "react-router-dom"
import SideNav from './SideNav';
import { Home, Business, Flight,Speed, Group, Chat, FilterHdr, Create, LocalMall, EventNote, Airplay } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BusinessProfile from './BusinessProfile';
import FullWidthGrid from './HomeContainers';
import LearningContent from './LearningContent';
import LearningVideos from './LearningVideos';


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
    icon: <Flight/>,
   
  },
  {
    name: 'accelerate',
    label: <Link to="weeklycontent">Accelerate</Link>,
    icon: <Speed/>,
    
  },
  {
    name: 'community',
    label: 'Community',
    icon: <Group/>
  },
  {
    name: 'chat',
    label: 'Chat',
    icon: <Chat/>
  },
  {
    name: 'my tasks',
    label: 'My Tasks',
    icon: <FilterHdr/>
  },
  {
    name: 'content centre',
    label:'Content Centre',
    icon: <Create/>
  },
  {
    name: 'service providers',
    label: 'Service Providers',
    icon: <LocalMall/>
  },
  {
    name: 'coaching',
    label: 'Coaching',
    icon: <Group/>
  },
  {
    name: 'dealflow',
    label: 'DealFlow',
    icon: <Airplay/>
  },
  {
    name: 'events',
    label: 'Events',
    icon: <EventNote/>
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
                <Route path="/weeklycontent">
                  <LearningContent/>
                </Route>
                <Router path="/videos">
                  <LearningVideos/>
                </Router>
              </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>  
  );
}

export default App;
