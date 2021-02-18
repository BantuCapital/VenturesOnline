import React from 'react';
import SideNav from '../SideNav';
import { Card, CardHeader, CardMedia, CardContent, Grid, Typography, Avatar, IconButton, Link } from '@material-ui/core'
import { Home, Business, MeetingRoom, LocalLibrary, Group, ExpandLess, ExpandMore } from '@material-ui/icons';
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
      BackgroundColor: 'white',
      maxHeight: '150px',
      width: '100%',
      marginBottom: '10px'
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
      [theme.breakpoints.down('xs')]:{
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
            <Card className={classes.card} >
              <CardHeader
                avatar={
                  <Avatar>
                    
                  </Avatar>
                }
                title={
                  <Typography>
                    Business Name Prop Goes here.
                  </Typography>
                }
                subheader={
                  <Typography variant='subtitle'
                    style={{
                      color: "#FA3900",
                    }}
                  >
                    <Link href='#' color='inherit'>
                      View Business Profile 
                    </Link>
                  </Typography>
                }
                action={
                  <IconButton aria-label='viewMore'>
                    <ExpandMore/>
                  </IconButton>
                }
              /> 
            </Card>
            <Card className={classes.card} >
              <CardHeader
                avatar={
                  <Avatar>
                    
                  </Avatar>
                }
                title={
                  <Typography>
                    Business Name Prop Goes here.
                  </Typography>
                }
                subheader={
                  <Typography variant='subtitle'
                    style={{
                      color: "#FA3900",
                    }}
                  >
                    <Link href='#' color='inherit'>
                      View Business Profile 
                    </Link>
                  </Typography>
                }
                action={
                  <IconButton aria-label='viewMore'>
                    <ExpandMore/>
                  </IconButton>
                }
              /> 
            </Card>
            <Card className={classes.card} >
              <CardHeader
                avatar={
                  <Avatar>
                    
                  </Avatar>
                }
                title={
                  <Typography>
                    Mentor Name
                  </Typography>
                }
                subheader={
                  <Typography variant='subtitle'
                    style={{
                      color: "#FA3900",
                    }}
                  >
                    <Link href='#' color='inherit'>
                      View Mentor Profile
                    </Link>
                  </Typography>
                }
                //onclick goes to a page showing the mentor profile which looks eexactly like the mentor profile page in mentor view
                action={
                  <IconButton aria-label='viewMore'>
                    <ExpandMore/>
                  </IconButton>
                } 
                // on expansion can verify a mentor. and assign businesses to it from a drop down menu of business 
                // can also deverify a mentor, all those businesses become without a mentor and avaliable for assignment if that happens
                //can also see a list of assigned businesses on drop down
                //can see total hours spent on platform by mentor and when they were last seen 
                //can also see total hours spent by mentors businesses on the platform 
              /> 
            </Card>
          </div>
        </div>
      </ThemeProvider>
    );
  }
  
  export default Ventures;