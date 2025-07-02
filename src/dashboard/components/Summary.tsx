import { CardContent, Typography } from '@mui/material'
import React from 'react'


function Summary({title, icon, value, analytics, isAnalyticsNegative }: {title: string, icon: React.ReactNode, value: number, analytics: string, isAnalyticsNegative: boolean}) {
  return (
    <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'0.5rem', padding:'1rem'}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        <span className="flex flex-row justify-between">
            <span>{title}</span>
            <span>{icon}</span>
        </span>
        </Typography>
        <Typography variant="h5" component="div">
        {value}
        </Typography>
        <Typography sx={{fontSize:12}} className={isAnalyticsNegative ? "text-red-500" : "text-green-500"}>
        {analytics}
        </Typography>
    </CardContent>
  )
}

export default Summary