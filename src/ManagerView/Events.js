import React from 'react';
import { Card, CardHeader, Grid, Typography, TextField, CardMedia, CardContent, Box, Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Event, ExpandMore } from '@material-ui/icons';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import EventImg from '../Images/Event.jpg';


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
      minHeight: '83vh',
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
        height: '240px',
    },

    skills: {
      [theme.breakpoints.down('sm')]:{
        paddingLeft:'30px'
      }
    },

    accordion:{
        marginTop:'4px'
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

function Events() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
              <Card className={classes.card} variant="outlined" raised='true'>
                  <CardHeader
                      title={
                      <Typography variant='h5'>
                          Schedule a New Event
                      </Typography>
                      }
                      style={{ textAlign: 'center' }}
                  />
                  <CardMedia
                      className={classes.media}
                      image={EventImg}
                      title="This is our Ecosystem"
                  />
                  <CardContent>
                    <Box >
                        <VOTextField  id='Skills' label='Event Title' variant='outlined' style={{padding: '5px', width:'100%'}} size='small'/>
                        <VOTextField  id='Skills' label='Location' variant='outlined' style={{padding: '5px', width:'100%'}} size='small'/>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <VOTextField  id='Skills' label='Date' variant='outlined' style={{padding: '5px', width:'100%'}} size='small'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <VOTextField  id='Skills' label='Time' variant='outlined' style={{padding: '5px', width:'100%'}} size='small'/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{padding:'5px'}}>
                        <Button 
                            variant="contained"
                            style={{
                                width:'100%', 
                                color: 'white',
                                backgroundColor: "#FA3900",
                                alignSelf: 'center'
                            }} 
                            >
                            Schedule
                        </Button>
                    </Box>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} md={6}>
                <Card style={{width:'100%'}} variant="outlined" raised='true'>
                  <CardHeader
                      title={
                      <Typography variant='h5'>
                          Schedule Events
                      </Typography>
                      }
                      style={{ textAlign: 'center' }}
                  />   
                </Card>
                <Accordion className = {classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls='panel1a-content'
                        id = 'panel1a-header'
                    >
                        <Event style={{color:"#FA3900" }}/>
                        <Box style={{marginLeft:'15px'}}>
                            <Typography>
                                Event Title
                            </Typography>
                        </Box>                    
                    </AccordionSummary>
                  <AccordionDetails>
                    <Box  style={{marginLeft:'15px'}}>
                        <Box display='flex' flexDirection='row' >
                            <Typography variant='body2' style={{fontWeight: 'bold' }}>
                                Location:&nbsp;
                            </Typography>
                            <Typography variant='body2'>
                                Durban
                            </Typography>
                        </Box>
                        <Box display='flex' flexDirection='row'>
                            <Typography variant='body2' style={{fontWeight: 'bold' }}>
                                Date:&nbsp;
                            </Typography>
                            <Typography variant='body2'>
                                6 July 2021
                            </Typography>
                        </Box>
                        <Box display='flex' flexDirection='row'>
                            <Typography variant='body2' style={{fontWeight: 'bold' }}>
                                Time:&nbsp;
                            </Typography>
                            <Typography variant='body2'>
                                18:00
                            </Typography>
                        </Box>
                    </Box>   
                  </AccordionDetails>
                </Accordion>
              
          </Grid>
      </Grid>
  </div>
    );
  }
  
export default Events;