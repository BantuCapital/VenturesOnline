import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, TextField, Box, FormControl, InputLabel, Input, InputAdornment, IconButton, Link } from '@material-ui/core'
import { Visibility, VisibilityOff} from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';
import Logo from '../Images/Logo.png'

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

    card: {
      minHeight: '80vh',
      display: 'flex',
      flexDirection:'column',
      backgroundColor: 'white',
      margin:'10px',
      width:'320px',
      [theme.breakpoints.down('xs')]:{
        width:'99%'
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

    logo: {
      height: "120px",
      marginLeft: theme.spacing(0),
      justifyContent:'center',
      [theme.breakpoints.up('sm')]:{
        //justifyContent: 'left'
      }
    },

    radio: {
      color: '#FA3900'
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


function Signin() {
    const classes = useStyles();
    const[values, setValues] = React.useState({
      showPW:false,
      password: '',
    });

    const onClickShowPW = () => {
      setValues({...values, showPW: !values.showPW});
    }

    const mouseDownPW = (e) =>{
      e.preventDefault();
    }

    const handleChange = (prop) => (e) => {
      setValues({...values, [prop]: e.target.value})
    }


    return (
      <ThemeProvider theme={theme}>
        <div className={classes.Background}>
          <Box display='flex' flexDirection='row' className={classes.logo}>
            <img src={Logo} alt="Ventures Online" className={classes.mobileLogo}/>
          </Box>
          <Box display='flex' flexDirection='row' style={{justifyContent:'center'}}>
            <Card className={classes.card} variant='outlined'>
              <CardHeader
                title={
                  <Typography variant='h5'>
                    Sign In
                  </Typography>
                  }
                  style={{ textAlign: 'center' }}
              />
              <CardContent style={{marginTop:'20px'}}>               
                <VOTextField required id='email' label='Email' fullWidth style={{paddingBottom: '6px'}}/>
                <FormControl style={{width:'100%', paddingBottom: '6px'}}>
                  <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
                  <Input
                    required
                    fullWidth
                    style={{ width:'100%', color:'FA3900'}}                   
                    id='Password'
                    type={values.showPW ? 'text':'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={onClickShowPW}
                          onMouseDown={mouseDownPW}
                        >
                          {values.showPW ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>                          
                <Box display='flex' flexDirection='row' style={{justifyContent:'center', marginBottom:'8px'}}>
                  <Button variant='contained' style={{backgroundColor:'#FA3900', color: 'white', width:'60%', marginTop:'80px'}}>
                    Sign In
                  </Button>
                </Box>
                <Box display='flex' flexDirection='row' style={{justifyContent:'center'}}>
                  <Typography variant='caption'>
                    Don't have an account yet?&nbsp;
                  </Typography >
                  <Typography
                    variant='caption'
                    style={{
                      color: "#FA3900",
                    }}
                    >
                      <Link href='#' color='inherit'>
                        Sign Up Here
                      </Link>
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' style={{justifyContent:'center'}}>
                  <Typography
                    variant='caption'
                    style={{
                      color: "#FA3900",
                    }}
                    >
                      <Link href='#' color='inherit'>
                        Forgot Password?
                      </Link>
                    </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </div>
      </ThemeProvider>
    );
  }
  
  export default Signin;