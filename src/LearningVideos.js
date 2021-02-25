import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height:500,
      width:950,
      marginLeft:40,
      fontSize:17,
      marginTop:20,
      padding: theme.spacing(6),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
 

const LearningVideos = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
        <Grid container spacing={2}>
            
            <Grid item xs={12} sm={24} style={{marginTop:90}}>
            <Paper className={classes.paper}>
                <p style={{ marginTop:-40,marginLeft:-600 }}>Video Learning Content </p>  
                <div style={{ marginTop:-15 }}>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='50%'
                    height='300px'
                    marginTop='50px'
                    />
                    <h3 style={{ marginTop:10,marginLeft:-100 }}>Comment</h3>
                </div>
                <div style={{ marginTop:-300,marginLeft:550 }}>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='80%'
                    height='100%'
                    marginTop='50px'
                    />
                    <h2 style={{ marginTop:-2 }}>Business </h2>
                </div>
            </Paper>
            </Grid>
        </Grid>
        </div>
     );
}

export default LearningVideos;