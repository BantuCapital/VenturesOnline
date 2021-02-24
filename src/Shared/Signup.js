import React from 'react';
import { Card, CardHeader, CardContent, Typography, Button, TextField, Box, FormControl, RadioGroup, InputLabel, Input, InputAdornment, IconButton, FormHelperText, FormControlLabel, Radio, Link } from '@material-ui/core'
import { Visibility, VisibilityOff} from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, makeStyles, withStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';
import Logo from '../Images/Logo.png'

const theme = createMuiTheme({
  palette:{
    primary: {
        main: '#FA3900'
    },
    secondary: {
        main: 'rgb(255,255,255,0)'
    }
  },
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
      border:'1px solid',
      borderColor:'#FA3900',
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


function Signup() {
    const classes = useStyles();
    const[values, setValues] = React.useState({
      showPW:false,
      showRPW: false,
      password: '',
      repassword: '',
    });

    const [value, setValue] = React.useState('manager');

    const onClickShowPW = () => {
      setValues({...values, showPW: !values.showPW});
    }

    const onClickShowRPW = () => {
      setValues({...values, showRPW: !values.showRPW});
    }

    const mouseDownPW = (e) =>{
      e.preventDefault();
    }

    const mouseDownRPW = (e) =>{
      e.preventDefault();
    }

    const handleChange = (prop) => (e) => {
      setValues({...values, [prop]: e.target.value})
    }

    const handleTypeChange = (e) => {
      setValue(e.target.value)
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
                    Sign Up
                  </Typography>
                  }
                  style={{ textAlign: 'center' }}
              />
              <CardContent>               
                <VOTextField required id='email' label='Email' fullWidth style={{paddingBottom: '6px'}}/>
                <FormControl style={{width:'100%', paddingBottom: '6px'}}>
                  <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
                  <Input
                    color='primary'
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
                <FormControl style={{width:'100%', paddingBottom: '6px'}}>
                  <InputLabel htmlFor='standard-adornment-password'>Re-enter Password</InputLabel>
                  <Input
                    color='primary'
                    required
                    fullWidth
                    style={{ width:'100%', color:'FA3900'}}                   
                    id='Re-Password'
                    type={values.showRPW ? 'text':'password'}
                    value={values.repassword}
                    onChange={handleChange('repassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={onClickShowRPW}
                          onMouseDown={mouseDownRPW}
                        >
                          {values.showRPW ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {values.password!==values.repassword ? <FormHelperText id='component-error-text' style={{color: 'red'}}>Password do not Match</FormHelperText>:null }
                </FormControl>
                <FormControl component='fieldset' style={{paddingTop:'12px', paddingLeft:'3px', paddingBottom:'12px'}}>  
                  <RadioGroup aria-label='User type' name='value' value={value} onChange={handleTypeChange} >
                    <FormControlLabel value='manager' control={<Radio className={classes.radio} style={{color:'#FA3900'}}/>}  label='I want to start an ecosystem'/>
                    <FormControlLabel value='mentor' control={<Radio className={classes.radio} style={{color:'#FA3900'}}/>} label='I want to join an ecosystem as a mentor'/>
                    <FormControlLabel value='business' control={<Radio className={classes.radio} style={{color:'#FA3900'}}/>} label='I want to join an ecosystem as an entrepreneur' />
                  </RadioGroup>
                </FormControl>
                <Box display='flex' flexDirection='row' style={{justifyContent:'center', marginBottom:'8px'}}>
                  <Button variant='contained' style={{backgroundColor:'#FA3900', color: 'white', width:'60%', marginTop:'5%'}}>
                    Sign Up
                  </Button>
                </Box>
                <Box display='flex' flexDirection='row' style={{justifyContent:'center'}}>
                  <Typography variant='caption'>
                    Already have an account?&nbsp;
                  </Typography >
                  <Typography
                    variant='caption'
                    style={{
                      color: "#FA3900",
                    }}
                    >
                      <Link href='#' color='inherit'>
                        Sign In Here
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
  
  export default Signup;