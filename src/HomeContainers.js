import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  search:{
    width:50,
    height:20,
  },
  paper: {
    height:200,
    marginLeft:40,
    marginTop:120,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} style={{ width:"150px", paddingTop:"4px", color:"blue"}}>
          <Paper className={classes.paper} >From DealFlow
           <br/> Deal Pending 0<br/> Deal closed 2</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Continue your journey</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Notifications</Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>Ventures Board</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
