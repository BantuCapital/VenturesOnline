import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Box, Avatar, Button, useMediaQuery, ClickAwayListener, Popper,MenuList, MenuItem, Paper, useScrollTrigger } from '@material-ui/core';
import Logo from './Images/Logo.png';
import Abe from './Images/Abe-Cambridge.jpg';
import BackgroundImage from './Images/Background2.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    border:'white',
  },
  drawer: {
    border:'white',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  sidedrawer:{
    height: '100vh',
    width: '250px',
    backgroundColor: 'white',

  },
  appBar: {
    backgroundColor: 'transparent',
    height:"80px",
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  /*toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },*/
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    border:'white',
  },
  card: {
    width: "98%",
    border:"none",
    marginTop: "5px",
    marginBottom: "15px",
    boxShadow: "none",
},
mobileLogo: {
    height: "60px",
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
},
profileAvatar:{
    width: theme.spacing(7),
    height: theme.spacing(7),
},
nameProfilebox:{
    marginRight: "3px",
    display: "flex",
    flexDirection: "column",
    paddingRight: "0%",
    alignItems: "center",
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
        display: 'none',
    },
},
clickable: {
    fontSize: '11px',
    marginLeft: "0px",
    marginRight: "0px",
    color: "black"
},
mainProfileBox: {
    display: "flex",
    flexDirection: "row",
    marginLeft:"auto",
    marginRight: -12,
    alignItems: "center"
},
dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },

}));


const MenuItems = withStyles({
    root: {
        "&$selected":{
            backgroundColor: "#FA3900",
            color: "white",
            opacity: 1,
        },
        "&$selected:hover":{
            backgroundColor: "#FA3900",
            color: "white",
            opacity: 1,
        },
        "&:hover":{
            backgroundColor: "#FA3900",
            color: "white",
            opacity: 1,
        },
        "&:focus":{
          backgroundColor: "#FA3900",
          color: 'white',
          opacity: 1,
        },

        selected: {}
    }
})(MenuItem);

const Buttons = withStyles({
  root: {
    
    "&:hover":{
        backgroundColor: "#FA3900",
        color: "white",
        opacity: 1,
    },
    

  }
})(Button);



function SideNav(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const anchorRef = React.useRef();
  const isBreakPoint = useMediaQuery(theme.breakpoints.up('sm'));
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleProfileClick () {
      setProfileOpen(anchorRef.current);
  };

  function handleClickAway() {
      setProfileOpen(null);
  };

  const open = Boolean(profileOpen);
  const id = open ? "popover menu" : undefined;

  const trigger = useScrollTrigger({
    target: window ? window(): undefined,
    disableHysteresis: true,
    threshold: 0,
  });

  const drawer = (
    <div className={classes.sidedrawer}>
      <Card className={classes.card}>
              <CardMedia
                  component="img"
                  alt="VO Logo"
                  height = "85"
                  src = {Logo}
                  title = "Ventures Online Logo"
              />
      </Card>
      <MenuList>
        {props.items.map((item) => (
          <MenuItems key={item.name} >
            <Box pl={3} >
              { item.icon }
            </Box>
            <Box mx='auto' width = '10'>
              <ListItemText> <Typography> {item.label} </Typography></ListItemText>
            </Box>  
          </MenuItems>
        ))}
      </MenuList>
    </div>
   );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} 
        style={{backgroundImage: trigger ? `url(${BackgroundImage})`: 'none', backgroundPosition: 'right' }}
      >
        <Toolbar style={{height:"80px"}}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="Ventures Online" className={classes.mobileLogo}/>
          <Box className={classes.mainProfileBox} >
                <Box className={classes.nameProfilebox} >
                    <Typography style={{color: "black"}}> Hi {props.user} </Typography>
                    <Box display='flex'>
                        <Buttons className={classes.clickable} size="small" >Profile</Buttons>
                        <Typography style={{fontSize: "12px", paddingTop:"4px", color:"black"}}>|</Typography>
                        <Buttons className={classes.clickable} size="small">Sign Out</Buttons>
                    </Box>
                </Box>  
                { isBreakPoint ? (
               
                    <Avatar src={Abe} className={classes.profileAvatar}/>
                    
                ) : (
                    <div ref={anchorRef}>
                        <IconButton 
                            onClick = {handleProfileClick}
                            aria-describedby={id}
                        >
                            <Avatar src={Abe} className={classes.profileAvatar}/>
                        </IconButton>
                        <Popper 
                            id={id}
                            open={open}
                            anchorEl={profileOpen}
                            onClose = {handleClickAway}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                        >
                                <Paper>
                                   <ClickAwayListener onClickAway={handleClickAway}>
                                        <MenuList>
                                            <MenuItems onClick={handleClickAway}>Profile</MenuItems>
                                            <MenuItems onClick={handleClickAway}>Sign Out</MenuItems>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            
                        </Popper>
                    </div>    
                            
                    

                )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer

            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
     
    </div>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;