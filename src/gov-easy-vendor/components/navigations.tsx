import { Box, Divider, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';
import { themeContext } from '../../contexts/theme-context';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

function Navigations({onDashboardChange}: {onDashboardChange: (dashboard: string) => void}) {
  const {darkTheme, setDarkTheme} = useContext(themeContext);
  const dashboardLists = [{name:'Dashboard',icon:<HomeIcon />}, {name:'Bookings',icon:<CalendarMonthIcon />}, {name:'Services',icon:<RoomServiceIcon />},{name:'Settings',icon:<SettingsIcon />}];
  return (
    <Box className="flex flex-col h-screen justify-between w-250  " >
    <Box>
      <div className="flex flex-row items-center gap-3 p-4">
        <AssuredWorkloadIcon sx={{width:20,height:20}}/>
        <div className="flex flex-col gap-1">
          <span className={`text-md font-bold ${darkTheme ? "text-white" : "text-slate-800"}`}>Gov Easy Vendor Portal</span>
          <span className={`text-slate-500 text-xs ${darkTheme ? "text-white" : "text-slate-800"}`}>Vendor Dashboard</span>
        </div>
      </div>
      <Divider/>
      <List>
        {dashboardLists.map((text) => (
              <ListItem key={text.name} disablePadding>
              <ListItemButton onClick={()=>onDashboardChange(text.name)}>
                  <ListItemIcon>
                  {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                  
              </ListItemButton>
              </ListItem>

        ))}
      </List>
    </Box>
  

    <FormGroup className="pt-2 pb-2 pl-4 pr-4 " >
      <FormControlLabel
          label="Dark Mode"
          control={
              <Switch 
              
              title="Switch to Dark Mode?" 
              checked={darkTheme} 
              onChange={(e) => setDarkTheme(e.target.checked)
              }>
              </Switch>
              }
      />
    </FormGroup>

  </Box>
  )
}

export default Navigations