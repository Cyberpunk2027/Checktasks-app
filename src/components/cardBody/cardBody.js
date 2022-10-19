import TaskTabs from "../taskTabs/taskTabs";
import TaskForm from "../taskForm/taskForm";
import AppHeader from "../appHeader/appHeader";
import Footer from "../footerItem/footerItem";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Paper } from "@mui/material";
import { nanoid } from "nanoid";
import { Reorder } from "framer-motion";
import SortPanel from '../sortPanel/sortPanel'
import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import * as React from 'react'


const CardBody = () => {
    

    const [task, setTask] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')

        if (savedTasks) {
            return JSON.parse(savedTasks)
        } else {
            return []
        }
    })
    

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(task))
    }, [task])

    const addTask = (input) => {
        if(input){
            const newItem = {
                id: id,
                tasks: input.trim(),
            }
            setTask((prevTask) => {
                return [...prevTask, newItem]
            })
        }
        
    }
    
    
    const id = nanoid()

    const deleteTask = (id) => {
        setTask((prevTask) => 
        {return prevTask.filter( tasks => tasks.id !== id)})
        }


    const [value, setValue] = useState('one')

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }


    let taskItems;
    
    if (value === 'two') {
        taskItems = task.filter(task => task.checked)
    } else {
        taskItems = task
    }


    function toggleChecked (id) {
        setTask(prevTask => {
            return prevTask.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
        })
    }

    const [mode, setMode] = useState(false)

    const customTheme = createTheme({
        palette: {
          mode: mode ? 'dark' : 'light'
        },
      })

    const toggleColorMode = (props) => setMode(!mode)

    return(
        <div className="App">
            <ThemeProvider theme={customTheme}>
                <Paper style={{height: "100vh", weight: "100vh"}} sx={{m: -1}}>
                    <AppHeader onClick={toggleColorMode} value={customTheme.palette.mode === 'dark' ? <BrightnessHighOutlinedIcon/> : <Brightness4OutlinedIcon/>}/>
                    <TaskForm addTask={addTask}/>
                    <SortPanel value={value} onChange={handleChange}/>
                    <Reorder.Group axis="y" values={taskItems} onReorder={setTask}>
                        {taskItems.map((task) => {
                            return (
                                <Reorder.Item value={task} key={task.id}>
                                    <TaskTabs
                                    task={task}                            
                                    deleteTask={deleteTask}
                                    toggleChecked={toggleChecked}
                                    />
                                </Reorder.Item>
                            )
                        })}
                    </Reorder.Group>
                    <Footer/>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default CardBody