
import type { GridColDef } from '@mui/x-data-grid';
import { Box, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import ClockIcon from '@mui/icons-material/AccessTime';
import GridComponent from '../dummy-components/grid.component';
function RecentBookings({onAction,}: {onAction: (row: {id: string, department: string, service: string, date: string, status: string, userDetails: {name: string, email: string, phone: string}}) => void}) {

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'action',
            headerName: 'Action',
            width:60,
            flex:1,
            sortable:false,
            filterable:false,
            hideable:false,
            renderCell: (params) => (
                    <EditIcon className="cursor-pointer" onClick={()=>onAction({...params.row,userDetails:{name:"John Doe",email:"john.doe@example.com",phone:"1234567890"}})}/>
            )
        },
        { field: 'id', headerName: 'Booking ID', minWidth:150},
        {
          field: 'department',
          headerName: 'Department',
          minWidth:200,
          flex:1
        },
        {
          field: 'service',
          headerName: 'Service',
          minWidth:100,
          flex:1
          
        },
        {
          field: 'date',
          headerName: 'Date',
          flex:1,
          minWidth:100
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          filterable:false,
          hideable:false,
          minWidth:100,
          renderCell: (params) => (
            <Chip onDelete={()=>{}} deleteIcon={params.value === 'approved' ? <DoneIcon/> : params.value === 'pending' ? <ClockIcon/> : <CancelIcon/>} label={params.value} variant="outlined" color={params.value === 'approved' ? 'success' : params.value === 'pending' ? 'warning' : 'error'} />
          ),
          flex:1
          
        }
      ];
      
      const rows = [
        { id: 'BK-1234', department: 'Ministry of Education', service: 'IT Consulting', date: '2025-05-18', status:'approved' },
        { id: 'BK-1235', department: 'Department of Health', service: 'Network Setup', date: '2025-05-19', status:'pending' },
        { id: 'BK-1236', department: 'Ministry of Transport', service: 'Software Development', date: '2025-05-20', status:'rejected' },
        { id: 'BK-1237', department: 'Department of Finance', service: 'IT Consulting', date: '2025-05-21', status:'approved' },
        { id: 'BK-1238', department: 'Ministry of Defense', service: 'Security Audit', date: '2025-05-22', status:'pending' },
      ];
      
    return (
    <Box sx={{ maxHeight: '100%', width: '100%' }}>
     <GridComponent rows={rows} columns={columns}/> 
    </Box>
    )
}

export default RecentBookings