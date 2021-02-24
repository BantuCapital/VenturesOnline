import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import { EventOutlined, StarBorderOutlined, BusinessOutlined } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import Events from '../Images/Event.jpg';
import Meeting from '../Images/Meeting.jpg';
import Stats from '../Images/Stats.jpg';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "80px",
        [theme.breakpoints.up('sm')]: {
          marginLeft: '250px'
        }
    },
    card: {
      height: '500px',
    },

    media: {
      height: '300px',
    }
    
}));

function LandingComponent() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar style={{backgroundColor:"#FA3900" }}> 
                  <StarBorderOutlined/>
                </Avatar>
              }
              title={
                <Typography>
                  Upcoming Events
                </Typography>
              }
            />
            <CardMedia
              className={classes.media}
              image={Events}
              title="Upcoming Events"
            /> 
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>             
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar style={{backgroundColor:"#FA3900" }}> 
                  <EventOutlined/>
                </Avatar>
              }
              title={
                <Typography>
                  Upcoming Meetings
                </Typography>
              }
            />
            <CardMedia
              className={classes.media}
              image={Meeting}
              title="Upcoming Meetings"
            /> 
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>             
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar style={{backgroundColor:"#FA3900" }}> 
                  <BusinessOutlined/>
                </Avatar>
              }
              title={
                <Typography>
                  Ecosystem Statistics
                </Typography>
              }
            />
            <CardMedia
              className={classes.media}
              image={Stats}
              title='Your Mentee Businesses'
            /> 
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                You're mentoring 5 Businesses,
                Last seen business is...
              </Typography>
            </CardContent>             
          </Card>
        </Grid>
      </Grid>
    </div>
    );
  }
  
  export default LandingComponent;

