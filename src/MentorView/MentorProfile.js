import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Avatar, Button, Container, Box } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';

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
      minHeight: '80vh',
      display: 'flex',
      flexDirection:'column',
      backgroundColor: 'white',
      
    },

    cardSmall:{
      minHeight: '39vh',
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

function MentorProfile() {
    const classes = useStyles();
    return (
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
                      <Typography variant='body2' style={{fontWeight: 'bold' }}>
                        Name
                      </Typography>
                      <Typography variant='body2'>
                        Tom
                      </Typography>
                    </Box>
                    <Box className={classes.details}>
                      <Typography variant='body2' style={{fontWeight: 'bold' }}>
                        Surname
                      </Typography>
                      <Typography variant='body2'>
                        Larson
                      </Typography>
                    </Box>
                    <Box className={classes.details}>
                      <Typography variant='body2' style={{fontWeight: 'bold' }}>
                        Email
                      </Typography>
                      <Typography variant='body2'>
                        clive@ventures.co.za
                      </Typography>
                    </Box>  
                    <Box className={classes.details}>
                      <Typography variant='body2' style={{fontWeight: 'bold' }}>
                        Cell Number
                      </Typography>
                      <Typography variant='body2'>
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
    );
  }
  
  export default MentorProfile;