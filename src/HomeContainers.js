import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Avatar from '@material-ui/core/Avatar';
import Abe from './Images/Abe-Cambridge.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height:220,
    marginLeft:40,
    fontSize:17,
    marginTop:20,
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  player:{
    width:20,
    height:20
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} style={{marginTop:90}}>
          <Paper className={classes.paper} >
            <p style={{ backgroundColor: 'red',marginTop:-40 }}>From DealFlow</p>
            <p>Deals pending 0</p>
            <p>Deals Closed 2</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} style={{marginTop:90}}>
          <Paper className={classes.paper}>
            <p style={{ marginTop:-40 }}>
              Continue Your journey 
            </p>  
              <div style={{ marginTop:-15 }}>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                  width='100%'
                  height='100%'
                  marginTop='50px'
                />
                <h6 style={{ marginTop:-2 }}>Business Fundermentals    6 of 15</h6>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}style={{marginTop:90}}>
          <Paper className={classes.paper}>
            <p style={{ marginTop:-40 }}>Notifications</p>
            <div className="avatars" >
              <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
              <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
              <Avatar src={Abe} className={classes.profileAvatar}/>
              
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} style={{marginTop:10}}>
          <Paper className={classes.paper}>
            <p style={{ marginTop:-40, marginLeft:-800 }}>Ventures Board</p> 
            <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
            <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
            <Avatar src={Abe} className={classes.profileAvatar}/>
              <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
              <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
              <Avatar src={Abe} className={classes.profileAvatar}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
