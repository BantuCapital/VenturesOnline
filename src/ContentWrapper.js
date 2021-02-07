import React from "react";
import { makeStyles } from '@material-ui/core'


//const drawerWidth=240;

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "80px",
    
    }
}));

function ContentWrapper() {
    const classes = useStyles();

    return(
        <div className={classes.root}>

        </div>
    )
    
};

export default ContentWrapper;