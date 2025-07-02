import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Icon, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ClockIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext } from "react";
import { themeContext } from "../../contexts/theme-context";
function ActionDialog({open, onClose, bookingDetails}: {open: boolean, onClose: (action: boolean) => void, bookingDetails: {id: string, department: string, service: string, date: string, status: string, userDetails: {name: string, email: string, phone: string}}}) {
    const {darkTheme} = useContext(themeContext);
    return (
       <Dialog fullWidth open={open} onClose={onClose} >
        <DialogTitle>
           <Typography variant="h4" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                Booking Details
           </Typography>
        </DialogTitle>
        
        <DialogContent className="flex flex-col w-full gap-4">
            <Box className="flex flex-row gap-2 justify-around">
                <DialogContentText className="flex flex-col gap-1 w-full">
                        <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                            Department
                        </Typography>
                        <Typography variant="body1" gutterBottom className= {`font-medium text-sm ${darkTheme ? "text-white" : "text-slate-800"}`}>
                        {bookingDetails.department}
                        </Typography>
                </DialogContentText>
                <DialogContentText className="flex flex-col gap-1 w-full">
                    <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                        Service
                    </Typography>
                    <Typography variant="body1" gutterBottom className={`font-medium text-sm ${darkTheme ? "text-white" : "text-slate-800"}`}>
                        {bookingDetails.service}
                    </Typography>
                </DialogContentText>
            </Box>
            <Divider/>
            <Box className="flex flex-row gap-4">
            <DialogContentText className="flex flex-col gap-1 w-full">
                <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    Date
                </Typography>
                <Typography variant="body1" gutterBottom className={`font-medium text-sm ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    {bookingDetails.date}
                </Typography>
            </DialogContentText>
            <DialogContentText className="flex flex-col gap-1 w-full">
                <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    Status
                </Typography>
                <Typography variant="body1" gutterBottom className={`font-medium text-sm ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    {bookingDetails.status}
                </Typography>
            </DialogContentText>
            </Box>
            <Divider/>
            <Box className="flex flex-row gap-2">
            <DialogContentText className="flex flex-col gap-1 w-full">
                <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    Contact Details
                </Typography>
                <Typography variant="body1" gutterBottom className={`font-medium text-sm ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    {bookingDetails.userDetails.phone}
                </Typography>
            </DialogContentText>
            <DialogContentText className="flex flex-col gap-1 w-full">
                <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    Email
                </Typography>
                <Typography variant="body1" gutterBottom className={`font-medium text-sm ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    {bookingDetails.userDetails.email}
                </Typography>
            </DialogContentText>
            </Box>
            <Divider/> 
            <Box>
                <Typography variant="h5" gutterBottom className={`font-bold text-xl ${darkTheme ? "text-white" : "text-slate-800"}`}>
                    Status
                </Typography>
                <Typography variant="body1" gutterBottom className={`font-medium text-sm ${bookingDetails.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>
                   {bookingDetails.status === 'approved' ? <DoneIcon/>  : bookingDetails.status === 'pending' ? <ClockIcon/> : <CancelIcon/>} {bookingDetails.status}
                </Typography>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>onClose(true)}>Approve</Button>
            <Button onClick={()=>onClose(false)}>Reject</Button>
        </DialogActions>
       </Dialog>
    )
}

export default ActionDialog