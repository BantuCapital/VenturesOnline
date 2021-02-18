import React from 'react';
import SideNav from '../SideNav';
import { Card, CardHeader, CardContent, Grid, Typography, Avatar, Button, Container, Box, IconButton, TextField } from '@material-ui/core'
import { Home, Business, MeetingRoom, LocalLibrary, Group, AddCircle} from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
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
      height: '80vh',
      display: 'flex',
      flexDirection:'column',
      backgroundColor: 'white',
      
    },

    cardSmall:{
      height: '39vh',
      marginBottom: "12px",
      backgroundColor: 'white'
    },

    grid: {
      [theme.breakpoints.up('lg')]:{
        marginLeft: '10%',
        marginRight: '10%'
      }
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
      height: '100px',
    },

    textfield: {
      padding: '5px',
      display: 'flex',
    },

    container: { 
      display: 'flex', 
      flexDirection:'row', 
      justifyContent: 'center'
    }, 

    details: {
      padding: '6px',
      textAlign: 'center'
    },

    detail: {
      padding: '20px',
      
    }
    
}));

const VOTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#FA3900',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FA3900',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#FA3900',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FA3900',
      },
    },
  },
      
})(TextField);

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

function MentorProfile() {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.Background}>
          <SideNav items={MenuItems} user="Tom"/>
          <div className={classes.root}>
            <Grid container spacing={2} >
              <Grid item xs={12} md={5}>
                <Card className={classes.card} variant="outlined" raised='true'>
                  <CardHeader
                    title={
                      <Typography variant='h5'>
                        My Details
                      </Typography>
                    }
                    style={{ textAlign: 'center' }}
                  />
                  <CardContent >
                    <Container className={classes.container}>
                      <Avatar
                          src='images/example.jpg'
                          style={{
                            marginBottom: '20px',
                            width: '150px',
                            height: '150px',
                            backgroundColor: "#FA3900"
                          }}
                      />
                    </Container>
                    <Container className={classes.container}>
                      <Button
                        variant="contained"
                        component="label"
                        style={{
                          color: 'white',
                          backgroundColor: "#FA3900",
                          marginBottom: '20px'
                        }}
                      >
                        Upload Profile Image
                        <input
                          type="file"
                          accept='image/*'
                          hidden
                        />
                      </Button>
                    </Container>
                    <Box className={classes.details}>
                      <Typography variant='subtitle'>
                        Name
                      </Typography>
                      <Typography variant='h6'>
                        Tom
                      </Typography>
                    </Box>
                    <Box className={classes.details}>
                      <Typography variant='subtitle'>
                        Surname
                      </Typography>
                      <Typography variant='h6'>
                        Larson
                      </Typography>
                    </Box> 
                    <Box className={classes.details}>
                      <Typography variant='subtitle'>
                        Cell Number
                      </Typography>
                      <Typography variant='h6'>
                       0738459924
                      </Typography>
                    </Box> 

                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className={classes.cardSmall} variant="outlined" raised='true'>
                  <CardHeader
                    title={
                      <Typography variant='h5'>
                        My Skills And Experience
                      </Typography>
                    }
                    style={{ textAlign: 'center' }}
                  />
                  <Grid container>
                    <Grid item xs={6} className={classes.detail}>
                      <Box fontWeight='fontWeightBold' style={{paddingBottom:'5px'}}>
                        <Typography variant='subtitle'>
                          Skills
                        </Typography>
                      </Box>
                      <Typography variant='body2'>
                        Communication
                      </Typography>
                      <Typography variant='body2'>
                        Computer Science
                      </Typography>
                      <Typography variant='body2'> 
                        Marketing
                      </Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.detail}>
                    <Box fontWeight='fontWeightBold' style={{paddingBottom:'5px'}}>
                        <Typography variant='subtitle'>
                          Experience
                        </Typography>
                      </Box>
                      <Typography variant='body2'>
                        StartUp Grind UCT director
                      </Typography>
                      <Typography variant='body2'> 
                        Small Business owner for the past 3 years
                      </Typography>
                      <Typography variant='body2'>
                        Worked as a consultant at BCG
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
                
                <Card className={classes.cardSmall} variant="outlined" raised='true'>
                  <CardHeader
                    title={
                      <Typography variant='h5'>
                        Why Ventures Online
                      </Typography>
                    }
                    style={{ textAlign: 'center' }}
                  />
                  <Box className={classes.details}>
                    <Typography variant='body2' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    );
  }
  
  export default MentorProfile;