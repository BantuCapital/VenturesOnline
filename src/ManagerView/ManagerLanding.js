import React from 'react';
import SideNav from '../SideNav';
import { Home, Business, MeetingRoom, LocalLibrary, Group, Event, AccountBalance } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';
import LandingComponent from './LandingComponent';
import Mentors from './Mentors'
import Ventures from './Ventures'
import EcosystemProfile from './EcosystemProfile'
import Events from './Events'
import {BrowserRouter, Route, Switch} from "react-router-dom";

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Raleway',
        'sans-serif',
      ].join(','),
    },
});


const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "80px",
        [theme.breakpoints.up('sm')]: {
          marginLeft: '250px'
        }
    },
    card: {
      height: '500px',
    },

    Background: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      [theme.breakpoints.up('sm')]:{
        height: '100vh',  
      },
      [theme.breakpoints.down('sm')]:{
        height: '100%',
      }
    },

    media: {
      height: '300px',
    }
    
}));

const MenuItems = [
  { 
    name: 'home', 
    label: 'Home',
    icon: <Home/>,
    route:'/'
  },
  {
    name: 'ventures',
    label: 'Ventures',
    icon: <Business/>,
    route:'/ManagerVentures'
  },
  {
    name: 'mentors',
    label: 'Mentors',
    icon: <Group/>,
    route:'/Mentors'
    
  },
  {
    name: 'events',
    label: 'Events',
    icon: <Event/>,
    route:'/Events'
   
  },
  {
    name: 'meetings',
    label: 'Meetings',
    icon: <MeetingRoom/>,
    route:'/Meetings'
   
  },
  {
    name: 'learning content',
    label: 'Learning Content',
    icon: <LocalLibrary/>,
    route:'/Learning'
  },
  {
    name: 'ecosystem profile',
    label: 'Ecosystem Profile',
    icon: <AccountBalance/>,
    route:'/EcosystemProfile'
  },
]

function ManagerLanding() {
    const classes = useStyles();
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <div className={classes.Background}>
          <SideNav items={MenuItems} user="Tom"/>
          <Switch>
            <Route path='/' exact component={LandingComponent}/>
            <Route path='/ManagerVentures' component={Ventures}/>
            <Route path='/Mentors' component={Mentors}/>
            <Route path='/EcosystemProfile' component={EcosystemProfile}/>
            <Route path='/Events' component={Events}/>
          </Switch>
        </div>
      </ThemeProvider>
      </BrowserRouter>
    );
  }
  
  export default ManagerLanding;
  