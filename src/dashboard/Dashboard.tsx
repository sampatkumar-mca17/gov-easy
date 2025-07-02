import { Button, Card} from "@mui/material";
import Summary from "./components/Summary";
import { useContext, useEffect, useState } from "react";
import type { SummaryType } from "../model/model";
import { themeContext } from "../contexts/theme-context";
import RecentBookings from "../shared-components/widgets/RecentBookings";
import { SUMMARIES } from "./constants/constants";
import ActionDialog from "../shared-components/widgets/ActionDialog";
import Header from "../shared-components/dummy-components/header.component";
function Dashboard() {
  const [summaries, setSummaries] = useState<SummaryType[]>([]);
  const {isMobileDevice} = useContext(themeContext);
  const [bookingDetails, setBookingDetails] = useState({id:"",department:"",service:"",date:"",status:"",userDetails:{name:"",email:"",phone:""}});
  const [actionDialogOpen, setActionDialogOpen] = useState(false);
  useEffect(()=> setSummaries(SUMMARIES),[])
  return (
    <>
      <div className="flex flex-row align-center justify-between items-center">
        <Header title="Dashboard" subtitle="Welcome back, Vendor"/>
        <Button variant="contained" size="small" >View All Bookings</Button>
      </div>
      <div className="flex flex-col gap-4 overflow-auto h-[calc(100vh-150px)]">
      <div className={`flex flex-row gap-4 flex-wrap pt-4 align-center justify-between`}>
        {summaries.map((summary,index)=>(
          <Card key={index} sx={{flex:1, minWidth:`${isMobileDevice ? "100%" : "auto"}`}}>
            <Summary title={summary.title} icon={summary.icon} value={summary.value} analytics={summary.change} isAnalyticsNegative={summary.change.startsWith("-")}/>
          </Card>
        ))}
      </div>
      <Card sx={{mt:2,width:"100%",minHeight:"calc(100vh - 335px)",overflow:"auto"}}>
        <div className="text-xl font-bold p-4">
          Recent Bookings
        </div>
        <RecentBookings onAction={(action)=>{setBookingDetails(action);setActionDialogOpen(true)}}/>
      </Card>
      <ActionDialog open={actionDialogOpen} onClose={()=>setActionDialogOpen(false)} bookingDetails={bookingDetails}/>
      </div>
      
    </>
 

  );
}
export default Dashboard