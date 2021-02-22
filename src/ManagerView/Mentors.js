import React from 'react';
import SideNav from '../SideNav';
import { AccordionDetails, Accordion, AccordionSummary, Typography, Avatar, Box, Link, Grid, IconButton } from '@material-ui/core'
import { Home, Business, MeetingRoom, LocalLibrary, Group, ExpandMore, Event, AddCircle } from '@material-ui/icons';
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
    accordion: {
      BackgroundColor: 'white',
      //maxHeight: '150px',
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
      name: 'mentors',
      label: 'Mentors',
      icon: <Group/>,
      
    },
    {
      name: 'events',
      label: 'Events',
      icon: <Event/>,
     
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
  ]

  const mentorExamples =[
    {
      id: 1,
      name: 'Mentor Name Prop Goes here',
      label: 'Mentor 1'
    },

    {
      id: 2,
      name: 'Mentor Name Prop Goes here',
      label: 'Mentor 2'
    },

    {
      id: 3,
      name: 'Mentor Name Prop Goes here',
      label: 'Mentor 3'
    },
  ]

function Ventures() {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.Background}>
          <SideNav items={MenuItems} user="Tom"/>
          <div className={classes.root}>
          {
              mentorExamples.map((mentor)=>(
                <Accordion className = {classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls='panel1a-content'
                    id = 'panel1a-header'
                  >
                    <Avatar>
                          
                    </Avatar>
                    <Box flexDirection = 'column' style={{marginLeft:'15px'}}>
                      <Typography>
                        {mentor.label}
                      </Typography>
                      <Typography variant='subtitle'
                            style={{
                              color: "#FA3900",
                            }}
                          >
                          <Link href='#' color='inherit'>
                            View Business Profile 
                          </Link>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' flexDirection='column'>
                          <Typography style={{paddingBottom:4}}>
                            Verified
                          </Typography>
                          <Typography>
                            Businesses Assigned to Mentor
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' flexDirection='row' alignItems='center'>
                            <Typography>
                              Assign a Business
                            </Typography>
                            <IconButton style={{color:"#FA3900"}}>
                              <AddCircle/>
                            </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>
        </div>
      </ThemeProvider>
    );
  }

  //onclick goes to a page showing the mentor profile which looks eexactly like the mentor profile page in mentor view

  // on expansion can verify a mentor. and assign businesses to it from a drop down menu of business 
                // can also deverify a mentor, all those businesses become without a mentor and avaliable for assignment if that happens
                //can also see a list of assigned businesses on drop down
                //can see total hours spent on platform by mentor and when they were last seen 
                //can also see total hours spent by mentors businesses on the platform 
  
  export default Ventures;