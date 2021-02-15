import React from 'react';
import SideNav from '../SideNav';
import { Card, CardHeader, CardMedia, CardContent, Grid, Typography, Avatar, Button, Container, TextField, IconButton } from '@material-ui/core'
import { Home, Business, MeetingRoom, LocalLibrary, Group, AddCircle} from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';
import ProfilePic from '../Images/Abe-Cambridge.jpg'

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
                <Card className={classes.card} variant="outlined">
                  <CardHeader
                    title={
                      <Typography>
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
                    <div>
                      <VOTextField required id='Name' label='Name' variant='outlined' color='#FA3900' className={classes.textfield}/>
                      <VOTextField required id='Surname' label='Surname' variant='outlined' color='#FA3900' className={classes.textfield}/>
                      <VOTextField required id='Cell Number' label='Cell Number' variant='outlined' color='#FA3900' className={classes.textfield}/> 
                    </div>             
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className={classes.cardSmall} variant="outlined">
                  <CardHeader
                    title={
                      <Typography>
                        My Skills And Experience
                      </Typography>
                    }
                    style={{ textAlign: 'center' }}
                  />
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <VOTextField  id='Skills' label='Add a Skill' variant='outlined' style={{padding: '5px', width:'75%'}}/>
                    <IconButton>
                      <AddCircle id='AddSkill' fontSize='large' style={{color:'#FA3900',  }}/>
                    </IconButton>
                  </div> 
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <VOTextField  id='Experience' label='Add Experience' variant='outlined' style={{padding: '5px', width:'75%' }}/>
                    <IconButton>
                      <AddCircle id='AddExperience' fontSize='large' style={{color:'#FA3900',  }}/>
                    </IconButton>
                  </div>
                </Card>
                
                <Card className={classes.cardSmall} variant="outlined">
                  <CardHeader
                    title={
                      <Typography>
                        Why Ventures Online
                      </Typography>
                    }
                    style={{ textAlign: 'center' }}
                  />
                  <VOTextField
                    id='Motivation'
                    label='I want to be VO mentor because...'
                    multiline
                    rows='7'
                    variant='outlined'
                    className={classes.textfield}
                    style={{margin: '10px'}}
                  />
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    );
  }
  
  export default MentorProfile;