import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:grey,
  },
  search:{
    width:50,
    height:20,
  },
  paper: {
    height:450,
    marginTop:120,
    marginLeft:40,
    marginRight:20,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));



const BusinessProfile = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} marginTop={200}>Company Description
                    <h6>Vission</h6> hhhhhhhhhhhcaksbc <br/> uiaeciebvr3vhruhrhrhvhr
                     dhhhhhhhsvbjs
                     jhdsdvbsdudid
                     <h6>Mission</h6>
                     ajdlverhfuerbuwrivbu3r
                     uverbuerbeberifbeiueru
                     hsjjhhsdiuffisiuusssi
                     <h6>About</h6>ajkbvouqqerhqerhogiui
                     oqibvuqebqbvquebvqvn
                     jhvihvuiwbvuiwiveuic
                     c jhjsdbvjshhjvbjhsh
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <h3>Penguin Feet</h3> <h4>We got you</h4>
                        <h6>Bio</h6>
                            dgvjsvsvjsjkvhjdhjhd
                            jsdjhskjskhvshkkhhks
                            bhbksdkbskbjsvkbjdkj
                            shbsdkbsdiueskbsdbks
                            hsduiuigyfbwuveeuncu
                        <h6>Address</h6>
                            hfdiiuiureuifbiuuieu
                            jhjdhfdkfdfhkfhhfdkf
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper className={classes.paper}>Notifications</Paper>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default BusinessProfile;