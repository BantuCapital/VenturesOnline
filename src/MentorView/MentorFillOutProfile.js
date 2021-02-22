import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Avatar, Button, Container, TextField, IconButton } from '@material-ui/core'
import { AddCircle} from '@material-ui/icons';
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

theme.typography.h2={
    fontSize:'2rem',
    fontWeight: '300',
    fontStyle: 'italic',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]:{
        fontSize:'1.3rem'
    }
}

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        //marginTop: "80px",
        [theme.breakpoints.up('md')]:{
            marginLeft: '10%'
        }
    },

    card: {
      height: '80vh',
      display: 'flex',
      flexDirection:'column',
      backgroundColor: 'white',
      
    },

    cardSmall:{
      height: '35vh',
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

    header: { 
        height: '70px', 
        marginBottom: '10px', 
        backgroundColor: 'default',
        [theme.breakpoints.up('md')]:{
            marginRight: '9%'
        },
        [theme.breakpoints.down('xs')]:{
            height: '79px'
        }
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


function MentorFillOutProfile() {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.Background}>
          
          <div className={classes.root}>
            <Card className={classes.header}>
                <CardContent style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Typography variant="h2" style={{textAlign: 'center'}}>
                       Tell Us A bit About Yourself
                    </Typography>
                </CardContent>
            </Card>
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
                          marginBottom: '20px',
                          textAlign: 'center'
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
                      <VOTextField id='Cell Number' label='Cell Number' variant='outlined' color='#FA3900' className={classes.textfield}/> 
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
                    <VOTextField  id='Skills' label='Add a Skill(Optional and max 5)' variant='outlined' style={{padding: '5px', width:'75%'}}/>
                    <IconButton>
                      <AddCircle id='AddSkill' fontSize='large' style={{color:'#FA3900',  }}/>
                    </IconButton>
                  </div> 
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <VOTextField  id='Experience' label='Add Experience(Optional and max 5)' variant='outlined' style={{padding: '5px', width:'75%' }}/>
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
                    rows='6'
                    rowsMax='7'
                    variant='outlined'
                    className={classes.textfield}
                    style={{margin: '10px'}}
                  />
                </Card>
                <Button 
                  variant="contained"
                  style={{
                    width:'100%', 
                    color: 'white',
                    backgroundColor: "#FA3900",
                    alignSelf: 'center'
                  }} 
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    );
  }
  
  export default MentorFillOutProfile;