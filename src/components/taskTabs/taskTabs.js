import * as React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'


const TaskTabs = ({task, toggleTask, deleteTask, toggleChecked}) => {
  
  const theme = createTheme({
    typography:{
        fontFamily: [
            'Open Sans',
            ].join(',')
    }
  })

    return (
      <ThemeProvider theme={theme}>
      <Box sx={{ display: 'grid', gap: 2 }}>
        <Grid>
          <List sx={{m: 1}}>
              <ListItem 
                secondaryAction={
                  <IconButton 
                    edge="end" 
                    aria-label="delete"
                    onClick={() => deleteTask(task.id)}>
                    <DeleteIcon/>
                  </IconButton>
                }
                sx={{
                  p: 1,
                  border: '1px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                  borderRadius: 2,
                  fontFamily: 'Open Sans'                  
                }}
                key={task.id} 
                className="card">
                <ListItemAvatar>
                  <Avatar>
                    <Checkbox value={task.checked} onChange={()=> toggleChecked(task.id)} color="success"/>
                  </Avatar>
                </ListItemAvatar>
                {task.tasks}
              </ListItem>
          </List>
        </Grid>
      </Box>
      </ThemeProvider>
    )
}

export default TaskTabs