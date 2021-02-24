import React from 'react';
import { AccordionDetails, Accordion, AccordionSummary, Typography, Avatar, Box, Link, Grid, IconButton } from '@material-ui/core'
import {  ExpandMore, AddCircle } from '@material-ui/icons';
import {  makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "80px",
        [theme.breakpoints.up('sm')]: {
          marginLeft: '250px'
        }
    },
    accordion: {
      BackgroundColor: 'white',
      //maxHeight: '150px',
      width: '100%',
      marginBottom: '10px'
    },
    
}));

  const mentorExamples =[
    {
      id: 1,
      name: 'Mentor Name Prop Goes here',
      label: 'Mentor 1'
    },

    {
      id: 2,
      name: 'Mentor Name Prop Goes here',
      label: 'Mentor 2'
    },

    {
      id: 3,
      name: 'Mentor Name Prop Goes here',
      label: 'Mentor 3'
    },
  ]

function Ventures() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          {
              mentorExamples.map((mentor)=>(
                <Accordion className = {classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls='panel1a-content'
                    id = 'panel1a-header'
                  >
                    <Avatar>
                          
                    </Avatar>
                    <Box flexDirection = 'column' style={{marginLeft:'15px'}}>
                      <Typography>
                        {mentor.label}
                      </Typography>
                      <Typography variant='subtitle'
                            style={{
                              color: "#FA3900",
                            }}
                          >
                          <Link href='#' color='inherit'>
                            View Business Profile 
                          </Link>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' flexDirection='column'>
                          <Typography style={{paddingBottom:4}}>
                            Verified
                          </Typography>
                          <Typography>
                            Businesses Assigned to Mentor
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                          <Typography variant='subtitle'>
                            Business Name
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box display='flex' flexDirection='row' alignItems='center'>
                            <Typography>
                              Assign a Business
                            </Typography>
                            <IconButton style={{color:"#FA3900"}}>
                              <AddCircle/>
                            </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>
    );
  }

  //onclick goes to a page showing the mentor profile which looks eexactly like the mentor profile page in mentor view

  // on expansion can verify a mentor. and assign businesses to it from a drop down menu of business 
                // can also deverify a mentor, all those businesses become without a mentor and avaliable for assignment if that happens
                //can also see a list of assigned businesses on drop down
                //can see total hours spent on platform by mentor and when they were last seen 
                //can also see total hours spent by mentors businesses on the platform 
  
  export default Ventures;