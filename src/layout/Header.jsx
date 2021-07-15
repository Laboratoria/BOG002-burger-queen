import React from 'react'
import { AppBar,  Toolbar, Typography } from '@material-ui/core'
import  Styles from "../App.Styles"


const Header = () => {
  const classes = Styles();
    return (
        <AppBar position="static" className={classes.Primary}>
  <Toolbar>    
    <Typography variant="h4">
      Burger Queen
    </Typography>    
  </Toolbar>
</AppBar>
        
    )
}

export default Header
