import React from 'react';
import SideNav from '../SideNav';
import { Card, CardHeader, CardMedia, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import { Home, Business, MeetingRoom, LocalLibrary, Group, Event, EventOutlined, StarBorderOutlined, BusinessOutlined } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';

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

function Ventures() {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.Background}>
          <SideNav items={MenuItems} user="Tom"/>
          <div className={classes.root}>
           
          </div>
        </div>
      </ThemeProvider>
    );
  }
  
  export default Ventures;