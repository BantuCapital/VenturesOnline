import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Abe from './Images/Abe-Cambridge.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:grey,
  },
  paper: {
    fontSize:11,
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
                    <h4>Vission</h4> hhhhhhhhhhhcaksbc <br/> uiaeciebvr3vhruhrhrhvhr
                     <p>dhhhhhhhsvbjsjhdsdvbsdudid</p> 
                     <h4>Mission</h4>
                     <p>ajdlverhfuerbuwrivbu3r uverbuerbeberifbeiueru hsjjhhsdiuffisiuusssi</p> 
                     <h4>About</h4>ajkbvouqqerhqerhogiui
                     <p>oqibvuqebqbvquebvqvn jhvihvuiwbvuiwiveuicc jhjsdbvjshhjvbjhsh</p> 
                     <p>oqibvuqebqbvquebvqvn jhvihvuiwbvuiwiveuicc jhjsdbvjshhjvbjhsh</p> 
                     <p>oqibvuqebqbvqueb jhvihvuiwbvuiwiveuic cjhjsdbvjshhjvbjhsh</p> 
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Avatar style={{marginLeft:80, width:100,height:150}} src={Abe} className={classes.profileAvatar}/>
                        <div className="content-second">
                          <h2>Penguin Feet</h2> <h3>We got you</h3>
                          <h4 style={{marginLeft:-180}}>Bio</h4>
                          <p>dkxcjvbjkvjbkfvhddvhdsgvjsvsvjsjkvhjdhjhd jsdjhskjskhvshkkhhksbhbksdkbskbjsvkbjdkj  shbsdkbsdiueskbsdbks hsduiuyfbwuveeuncu</p>    
                          <h4 style={{marginLeft:-160}}>Address</h4>
                          <p>hfdiiuhshshshhd dhshhsiureuifbiuuieu bvbkvkbvjk <br/> hchbfhdhdh sdvhddhdhd cjhcjdjxZ sdkvvdkdh jhjdhfdkfdfhkfhhfdkf</p>  
                        </div>   
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper className={classes.paper}>
                      <h3>Company Structure</h3> <h4 style={{marginLeft:-180}}>Enterprenuers</h4>
                      <p>cchhfdhbdfkbjdkdjdjjsdjsdhhd dhshhsiureuifbiuuieu bvbjbdbkvfbkjdfbkbkfdkbfkbfdbkkbvjk hchbfhdhdh <br/> sdvhddhdhd cjhcjdjxZ sdkvvdkdh jhjdhfdkhkfhhfdkf</p>  
                      <Avatar style={{marginLeft:20, width:80,height:80,marginBottom:50}} src={Abe} className={classes.profileAvatar}/>
                      
                      <Avatar style={{marginLeft:20, width:80,height:80}} src={Abe} className={classes.profileAvatar}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default BusinessProfile;