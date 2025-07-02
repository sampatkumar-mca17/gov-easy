import Navigations from "./components/navigations";
import { Box, Button, Drawer } from "@mui/material";
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, useNavigate } from "react-router";
import './Wrapper.css';
import { themeContext } from '../contexts/theme-context';
import MenuIcon from '@mui/icons-material/Menu';
import useScreenWidth from "../custom-hooks/useScreenWidth";
function Wrapper(){
   const [darkTheme, setDarkTheme] = React.useState(true);
   const {screenWidth} = useScreenWidth();
   const navigation = useNavigate()
     const theme = createTheme({
       palette: {
         mode: darkTheme ? 'dark' : 'light',
       },
     });
    const isMobileDevice:boolean = screenWidth <= 768;
    const [drawerOpen,setDrawerOpen] = React.useState<boolean>(false);
    function onDashboardChange(dashboard:string){
         navigation(dashboard.toLowerCase())
    }   
    function toggleDrawer(open:boolean){
          setDrawerOpen(open);
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <themeContext.Provider value={{darkTheme,setDarkTheme, isMobileDevice}}>
                    <Box sx={{backgroundColor:"background.default"}} className={`${!isMobileDevice ? "flex flex-row" : ""} h-screen` }>
                        <Box sx={{ width: { sm: '300px' } }}>
                            {isMobileDevice && (
                                <Button onClick={() => toggleDrawer(true)}>
                                    <MenuIcon/>
                                </Button>
                            )}
                            <Drawer 
                                sx={{
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px' },
                                    }}
                                variant={isMobileDevice ? "temporary" : "permanent"}
                                open={!isMobileDevice || drawerOpen} 
                                hideBackdrop={!isMobileDevice} 
                                onClose={()=>toggleDrawer(false)}
                            >
                                    <Navigations onDashboardChange={onDashboardChange}/>
                            </Drawer>
                        </Box>
                        <Box sx={{ flexGrow: 1, pt: 2, pb:2, pl:3, pr:3, width: `${isMobileDevice ? "100%" : "calc(100% - 300px)"}`, overflow:'auto' , height:"calc(100vh - 64px)"}}>
                            <Outlet/>
                        </Box>
                    </Box>

                </themeContext.Provider>
            </ThemeProvider>
        </>
      )
}

export default Wrapper;

