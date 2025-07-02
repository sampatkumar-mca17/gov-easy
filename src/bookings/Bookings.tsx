import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import ServerDay from './components/ServerDay';
import useFetchHighlightedDays from './custom-hooks/useFetchHighlightedDays';
import Calendaar from './components/Calendaar';
import { Box, Card } from '@mui/material';
import RecentBookings from '../shared-components/widgets/RecentBookings';
import { useContext } from 'react';
import { themeContext } from '../contexts/theme-context';
import ActionDialog from '../shared-components/widgets/ActionDialog';
import Header from '../shared-components/dummy-components/header.component';
const initialValue = dayjs(new Date().toISOString());

function Bookings() {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const {highlightedDays, fetchHighlightedDays, isLoading} = useFetchHighlightedDays();

  const [open, setOpen] = React.useState(false);
  const [bookingDetails, setBookingDetails] = React.useState({id: '', department: '', service: '', date: '', status: '', userDetails: {name: '', email: '', phone: ''}});

  React.useEffect(() => {
    fetchHighlightedDays(initialValue, requestAbortController);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    fetchHighlightedDays(date, requestAbortController);
  };

  return (
    <>
       <Box className="flex flex-row align-center justify-between pb-4">
         <Header title="Bookings" subtitle="View and manage your service bookings"/>
      </Box>
    <Box sx={{height:"calc(100vh - 170px)",overflow:"auto"}}>
      <Card className='w-full'>
        <Calendaar
          initialValue={initialValue}
          isLoading={isLoading}
          handleMonthChange={handleMonthChange}
          highlightedDays={highlightedDays}
          ServerDay={ServerDay}
        />
      </Card>
      <Box sx={{mt:2}}>
        <Header title="Upcoming Bookings"></Header>
        <RecentBookings onAction={(action)=>{setBookingDetails(action);setOpen(true)}}/>
      </Box>
      </Box>
      <ActionDialog open={open} onClose={()=>setOpen(false)} bookingDetails={bookingDetails}/>
    </>
    );
}


export default Bookings