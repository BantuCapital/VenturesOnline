import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";


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
                    <Link to="/">
                      <h2>Week 1: Introduction</h2>
                      <button>hello</button>
                    </Link>
                    <Link to="/">
                      <h2>Week 2: Concept</h2>
                    </Link>
                    <Link to="/">
                      <h2>Week 3: Introduction</h2>
                    </Link>
                </div>
            </Paper>
          </Grid> 
        </Grid>
      </div>
     );
}
 
export default LearningContent;