import React from 'react';
import { Card, CardHeader, Grid, Typography, Avatar, Button, Container, Box, CardMedia } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import EcosystemHeader from '../Images/EcosystemHeader.jpg'


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
      padding: '3px',
      //textAlign: 'center'
    },

    detail: {
      padding: '20px',
      
    },

    media: {
        height: '250px',
    },

    skills: {
      [theme.breakpoints.down('sm')]:{
        paddingLeft:'30px'
      }
    }
    
}));


function EcosystemProfile() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Grid container spacing={2} >
          <Grid item xs={12} md={5}>
              <Card className={classes.card} variant="outlined" raised='true'>
                  <CardHeader
                      title={
                      <Typography variant='h5'>
                          Ecosystem Details
                      </Typography>
                      }
                      style={{ textAlign: 'center' }}
                  />
                  <CardMedia
                      className={classes.media}
                      image={EcosystemHeader}
                      title="This is our Ecosystem"
                  />
                  <Box className={classes.details} display='flex' flexDirection='row' >
                      <Typography variant='body2' style={{fontWeight: 'bold', paddingLeft:10 }}>
                          Ecosystem Name:&nbsp;
                      </Typography>
                      <Typography variant='body2' >
                          Durban 
                      </Typography>
                  </Box>
                  <Box className={classes.details} display='flex' flexDirection='row' >
                      <Typography variant='body2' style={{fontWeight: 'bold', paddingLeft:10 }}>
                          Location:&nbsp;
                      </Typography>
                      <Typography variant='body2' >
                          Durban 
                      </Typography>
                  </Box>
                  <Box className={classes.details}>
                      <Typography variant='body2' style={{paddingLeft:'10px'}} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                  </Box>
              </Card>
          </Grid>
          <Grid item xs={12} md={6}>
              <Card className={classes.cardSmall} variant="outlined" raised='true'>
                  <CardHeader
                      title={
                      <Typography variant='h5'>
                          Ecosystem Manager Details
                      </Typography>
                      }
                      style={{ textAlign: 'center' }}
                  />
                  
                      <Grid container>
                        <Grid item xs={12} sm={6}>
                          <Container className={classes.container}>
                                <Avatar
                                    src='images/example.jpg'
                                    style={{
                                        marginBottom: '20px',
                                        width: '140px',
                                        height: '140px',
                                        backgroundColor: "#FA3900"
                                    }}
                                />
                            </Container>
                            <Container className={classes.container}>
                                <Button
                                    size='small'
                                    variant="contained"
                                    component="label"
                                    style={{
                                    color: 'white',
                                    backgroundColor: "#FA3900",
                                    marginBottom: '20px',
                                      
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
                        </Grid>
                        <Grid item xs={12} sm={6} >
                        <Box display='flex' flexDirection='row' style={{justifyContent:'center'}} >
                          <Box>
                            <Box className={classes.details}  >
                                <Typography variant='body2' style={{fontWeight: 'bold' }}>
                                    Name:&nbsp;
                                </Typography>
                                <Typography variant='body2' >
                                    Nonjabulo 
                                </Typography>
                            </Box>
                            <Box className={classes.details} >
                                <Typography variant='body2' style={{fontWeight: 'bold'}}>
                                    Surname:&nbsp;
                                </Typography>
                                <Typography variant='body2' >
                                    Mngoma 
                                </Typography>
                            </Box>
                            <Box className={classes.details}>
                                <Typography variant='body2' style={{fontWeight: 'bold' }}>
                                    Email:&nbsp;
                                </Typography>
                                <Typography variant='body2' style={{wordWrap: 'break-word', maxWidth:'100%' }} >
                                    Nonjabulo@gmail.com
                                </Typography>
                            </Box>
                            <Box className={classes.details} >
                                <Typography variant='body2' style={{fontWeight: 'bold'}}>
                                    Cell Number:&nbsp;
                                </Typography>
                                <Typography variant='body2' >
                                    0523369974 
                                </Typography>
                            </Box>
                          </Box>
                        </Box>
                        </Grid>
                      </Grid>
                      <Box>
                          
                      </Box>
                  
              </Card>
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
                      <Grid item xs={12} sm={6} className={classes.detail}>
                          
                            <Box className={classes.skills} >
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
                            </Box>
                          
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.detail}>
                          
                            <Box className={classes.skills}>
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
                            </Box>
                          
                      </Grid>
                  </Grid>
              </Card>
          </Grid>
      </Grid>
  </div>
    );
  }
  
export default EcosystemProfile;