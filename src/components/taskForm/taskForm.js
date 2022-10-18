import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'



const TaskForm = ({addTask}) => {  

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      addTask(input)
      setInput("")
  }

    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
      <Box sx={ {flexGrow: 1}} >
        <Grid  
        
        sx={{
          display: 'flex',
          gap: 2, 
          justifyContent: 'center', 
          alignItems: 'center'}}  
          p={2} m={2}
          >
          <Grid item onSubmit={handleSubmit}>
            <TextField
              label="Add your task"
              id="filled-size-normal"
              variant="filled"
              type="text"
              name="text"
              value={input}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              />
          </Grid>
          <Grid item >
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}> 
              Add 
            </Button>
          </Grid>
        </Grid>
      </Box>
    )
}
export default TaskForm