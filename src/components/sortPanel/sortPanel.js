import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



const SortPanel = (props) => {
  
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={props.value}
        onChange={props.onChange}
        aria-label="wrapped label tabs example"
        sx={{m: 2}}>

        <Tab value="one" label="All tasks" />

        <Tab value="two" label="Completed tasks"/>
      </Tabs>
    </Box>
  )
}

export default SortPanel