import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function Calendaar({initialValue, isLoading, handleMonthChange, highlightedDays, ServerDay}: {initialValue: any, isLoading: any, handleMonthChange: any, highlightedDays: any, ServerDay: any}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
        
        sx={{paddingLeft:2, width:'100%', height:'100%'}}
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
            day: ServerDay,
        }}
        slotProps={{
            day: {
            highlightedDays,
            } as any,
        }}
        />
    </LocalizationProvider>
  )
}

export default Calendaar