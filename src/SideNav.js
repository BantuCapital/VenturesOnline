import React from 'react'
import MuiListItem from '@material-ui/core/ListItem'
import { List, ListItemText, Card, CardMedia, Box, Typography} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Logo from './Images/Logo.png'

const useStyles = makeStyles(theme =>({
    root: {
       width: "100%",
       backgroundColor: "white",
       height: "50px"
    },

    card: {
        width: "98%",
        border:"none",
        marginTop: "50px",
        marginBottom: "40px",
        boxShadow: "none"
    },

    media:{
      width: "100%",
      border: "none"
    },
    
    listItemText:{
      fontSize: "50px"
    }

}));

const ListItem = withStyles({
    root: {
        "&$selected":{
            backgroundColor: "#FA3900",
            color: "white",
            opacity: 1,
        },
        "&$selected:hover":{
            backgroundColor: "#FA3900",
            color: "white",
            opacity: 1,
        },
        "&:hover":{
            backgroundColor: "#FA3900",
            color: "white",
            opacity: 1,
        },
        selected: {}
    }
})(MuiListItem);

function Sidebar({ items }) {
    const classes = useStyles();
    return (
      <div className="sidebar">
        <Card className={classes.card}>
                <CardMedia
                    component="img"
                    alt="VO Logo"
                    height = "85"
                    src = {Logo}
                    titel = "Ventures Online Logo"
                />
        </Card>
        <List disablePadding dense>
          {items.map(({ label, name, icon, ...rest }) => (
            <ListItem key={name} button {...rest} className={classes.root}>
              <Box pl={4.5} >
                { icon }
              </Box>
              <Box mx='auto' width = '10'>
                <ListItemText> <Typography> {label} </Typography></ListItemText>
              </Box>  
            </ListItem>
          ))}
        </List>
      </div>
    )
  }

export default Sidebar;