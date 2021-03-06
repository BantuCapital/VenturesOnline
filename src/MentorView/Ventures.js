import React from 'react';
import { AccordionSummary, Accordion, AccordionDetails, Typography, Avatar, Box, Link, Grid } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from '../Images/Background2.png';

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

    Background: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      [theme.breakpoints.up('sm')]:{
        height: '100vh',  
      },
      [theme.breakpoints.down('xs')]:{
        height: '100%',
      }
    },

    media: {
      height: '300px',
    }
    
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
                // where there is feedback outstanding the business' whole card wll be highlighted orange with the link made white. 
                // a gap analysis link will be included above the two lists so that a mento can check the gap analysis out if they so choose
              
  
  export default Ventures;