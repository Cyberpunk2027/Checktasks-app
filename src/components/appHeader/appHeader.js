import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'


const AppHeader = (props) => {  
    

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
                Daily Tasks App
              </Typography>
              <IconButton color="inherit"  onClick={props.onClick}>
                {props.value}
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
    )

}

export default AppHeader