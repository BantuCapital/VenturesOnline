import React from 'react';
import { Typography, Avatar, Link, Accordion, AccordionDetails, AccordionSummary, Box, Grid } from '@material-ui/core'
import { ExpandMore, } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";



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



  const businessExamples =[
    {
      id: 1,
      name: 'Business Name Prop Goes here',
      label: 'Business 1'
    },

    {
      id: 2,
      name: 'Business Name Prop Goes here',
      label: 'Business 2'
    },

    {
      id: 3,
      name: 'Business Name Prop Goes here',
      label: 'Business 3'
    },
  ]

function Ventures() {
    const classes = useStyles();   
    return (
      <div className={classes.root}>
            {
              businessExamples.map((business)=>(
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
                        {business.label}
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
                      <Grid item xs={12} md={6} style={{padding:6}}>
                        <Typography>
                          Recommended Sections
                        </Typography>
                        <Box display='flex' flexDirection='column'>
                          <Typography variant='subtitle'>
                            Recommended
                          </Typography>
                          <Typography variant='subtitle'>
                            Recommended
                          </Typography>
                          <Typography variant='subtitle'>
                            Recommended
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} style={{padding:6}}>
                        <Typography>
                          Optional Sections
                        </Typography>
                        <Box display='flex' flexDirection='column'>
                          <Typography variant='subtitle'>
                            Optional
                          </Typography>
                          <Typography variant='subtitle'>
                            Optional
                          </Typography>
                          <Typography variant='subtitle'>
                            Optional
                          </Typography>
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

  //onclick goes to business profile page as it looks to businesses when pulled up.
                // profile page also includes link to gap analysis  

  // expanded view shows 2 lists side by side or under each other depending on device screen size
                // list of recommended and optional sections
                // if a section is completed it will have a tick next to it, if feedback given will also have a tick
                // a gap analysis link will be included above the two lists so that a mento can check the gap analysis out if they so choose and above that will be the name of the mentor of this business(name is clickable if you want to chack out mentor profile)
  
  export default Ventures;