import React from "react";

export const themeContext = React.createContext({} as {darkTheme:boolean,setDarkTheme:(darkTheme:boolean)=>void,isMobileDevice:boolean});
