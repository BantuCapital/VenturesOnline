import React from 'react';
import SideNav from '../SideNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Business, MeetingRoom, LocalLibrary, Group } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';
import LandingComponent from './LandingComponent';
import Ventures from './Ventures'
import MentorProfile from './MentorProfile';

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
    route:'/Ventures'
  },
  {
    name: 'meetings',
    label: 'Meetings',
    icon: <MeetingRoom/>,
    route:''
  },
  {
    name: 'learning content',
    label: 'Learning Content',
    icon: <LocalLibrary/>,
    route:''
  },
  {
    name: 'ecosystem centre',
    label: 'Ecosystem Centre',
    icon: <Group/>,
    route:''
  }
]

const MenProfile = '/MentorProfile'

function MentorLanding() {
    const classes = useStyles();
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className={classes.Background}>
            <SideNav items={MenuItems} profile= {MenProfile} user="Tom"/>
            <Switch>
              <Route exact path='/' component={LandingComponent}/>
              <Route path='/Ventures' component={Ventures}/>
              <Route path='/MentorProfile' component={MentorProfile}/>
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
  
  export default MentorLanding;