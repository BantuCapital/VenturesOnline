import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height:500,
      width:950,
      marginLeft:40,
      marginTop:120,
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

const LearningContent = () => {
    const classes = useStyles();
    return ( 
        
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={16} sm={24} >
            <Paper className={classes.paper} >
              <h3>Start Up</h3>
                <div className="content-preview">
                    <Button style={{border:'2px solid black',width:800,height:100,marginBottom:20,textAlign:-800}} variant="outlined" color="primary" href="videos">
                     Week 1 : Introduction
                    </Button> <br/>
                    <Button style={{border:'2px solid black',width:800,height:100,marginBottom:20}} variant="outlined" color="primary" href="#outlined-buttons">
                     Week 2 : Concepts
                    </Button> <br/>
                    <Button style={{border:'2px solid black',width:800,height:100,marginBottom:20}} variant="outlined" color="primary" href="#outlined-buttons">
                     Week 3 : Introduction
                    </Button>
                </div>
            </Paper>
          </Grid> 
        </Grid>
      </div>
     );
}
 
export default LearningContent;