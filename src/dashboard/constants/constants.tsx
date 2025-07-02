import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ClockIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
export const SUMMARIES = [
    {
      title:"Today's Bookings",
      icon:<CalendarTodayIcon sx={{width:20,height:20}}/>,
      value:12,
      change:"+12% from last week"
    },
    {
      title:'Pending Approvals',
      icon:<ClockIcon sx={{width:20,height:20}}/>,
      value:5,
      change:"-10% from last week"
    },
    {
      title:'Completed Services',
      icon:<CheckIcon sx={{width:20,height:20}}/>,
      value:128,
      change:"+5% from last week"
    }
  ]