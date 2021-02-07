import React from 'react';
import './App.css';
import classNames from 'classnames';
import SideNav from './SideNav';
import ContentWrapper from './ContentWrapper'
import { Grid } from '@material-ui/core'
import { Home, Business, MeetingRoom, LocalLibrary, Group } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";



const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },});

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "80px",
    
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

//const useStyles = 

function App() {
  const bgClass = classNames('mainContainer', 'mainOverlay')
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={bgClass}>
        <SideNav items={MenuItems} user="Tom"/>
        <div className={classes.root}>
          Hello World
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
