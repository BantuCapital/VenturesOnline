import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Avatar from '@material-ui/core/Avatar';
import Abe from './Images/Abe-Cambridge.jpg';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height:220,
    marginLeft:40,
    marginRight:20,
    opacity:0.9,
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
              <p style={{marginTop:-50,marginLeft:22}}>The quick broom</p>
              <p style={{fontSize:12,marginTop:-20}}>The quick broom</p>
              <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
              <p style={{marginTop:-50,marginLeft:22}}>The quick broom</p>
              <p style={{fontSize:12,marginTop:-20}}>The quick broom</p>
              <Avatar src={Abe} className={classes.profileAvatar}/>
              <p style={{marginTop:-40,marginLeft:22}}>The quick broom</p>
              <p style={{fontSize:12,marginTop:-20}}>The quick broom</p>
              
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} style={{marginTop:10}}>
          <Paper className={classes.paper} style={{display:'flow-root'}}>
            <p style={{ marginTop:-40, marginLeft:-800 }}>Ventures Board</p> 
            <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
            <p style={{marginTop:-50,marginLeft:-680}}>The quick broom</p>
            <p style={{fontSize:12,marginTop:-20,marginLeft:-680}}>The quick broom</p>
            <Avatar style={{marginBottom:10}} src={Abe} className={classes.profileAvatar}/>
            <p style={{marginTop:-50,marginLeft:-680}}>The quick broom</p>
            <p style={{fontSize:12,marginTop:-20,marginLeft:-680}}>The quick broom</p>
            <Avatar src={Abe} className={classes.profileAvatar}/>
            <p style={{marginTop:-50,marginLeft:-680}}>The quick broom</p>
            <p style={{fontSize:12,marginTop:-20,marginLeft:-680}}>The quick broom</p>
              <Avatar style={{marginBottom:10,marginTop:-140,marginLeft:250}} src={Abe} className={classes.profileAvatar}/>
              <p style={{marginTop:-50,marginLeft:-180}}>The quick broom</p>
              <p style={{fontSize:12,marginTop:-20,marginLeft:-180}}>The quick broom</p>
              <Avatar style={{marginBottom:10,marginLeft:250}} src={Abe} className={classes.profileAvatar}/>
              <p style={{marginTop:-50,marginLeft:-180}}>The quick broom</p>
              <p style={{fontSize:12,marginTop:-20,marginLeft:-180}}>The quick broom</p>
              <Avatar style={{marginBottom:10,marginTop:12,marginLeft:250}} src={Abe} className={classes.profileAvatar}/>
              <p style={{marginTop:-50,marginLeft:-180}}>The quick broom</p>
              <p style={{fontSize:12,marginTop:-20,marginLeft:-180}}>The quick broom</p>
                <Avatar style={{marginBottom:10,marginTop:-150,marginLeft:450}} src={Abe} className={classes.profileAvatar}/>
                <p style={{marginTop:-50,marginLeft:220}}>The quick broom</p>
                <p style={{fontSize:12,marginTop:-20,marginLeft:220}}>The quick broom</p>
                <Avatar style={{marginBottom:10,marginLeft:450}} src={Abe} className={classes.profileAvatar}/>
                <p style={{marginTop:-50,marginLeft:220}}>The quick broom</p>
                <p style={{fontSize:12,marginTop:-20,marginLeft:220}}>The quick broom</p>
                <Avatar style={{marginBottom:10,marginTop:12,marginLeft:450}} src={Abe} className={classes.profileAvatar}/>
                <p style={{marginTop:-50,marginLeft:220}}>The quick broom</p>
                <p style={{fontSize:12,marginTop:-20,marginLeft:220}}>The quick broom</p>
                <Badge color="secondary" variant="dot">
                </Badge>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
