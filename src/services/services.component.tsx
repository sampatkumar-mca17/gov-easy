import { Button, Chip } from '@mui/material';
import Header from '../shared-components/dummy-components/header.component'
import type { GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import ClockIcon from '@mui/icons-material/AccessTime';
import GridComponent from '../shared-components/dummy-components/grid.component';
import { Box } from '@mui/material';
function Services() {
    const columns: GridColDef<(typeof rows)[number]>[] = [
       
        { field: 'id', headerName: 'Service ID', minWidth:150},
        {
          field: 'serviceName',
          headerName: 'Service Name',
          minWidth:200,
          flex:1
        },
        {
          field: 'price',
          headerName: 'Price',
          minWidth:100,
          flex:1
          
        },
        {
          field: 'presence',
          headerName: 'Presence',
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
          
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width:60,
            flex:1,
            sortable:false,
            filterable:false,
            hideable:false,
            renderCell: () => (
                <div className="flex flex-row gap-2">
                    <EditIcon className="cursor-pointer" onClick={()=>{}}/>
                    <DeleteIcon className="cursor-pointer" onClick={()=>{}}/>
                </div>
            )
        },
      ];

      const rows = [
        {
            id: '1',
            serviceName:'Network Setup',
            price:'$200.00/unit',
            presence:'on-site',
            status:'approved'
        },
        {
            id: '2',
            serviceName:'Software Development',
            price:'$120.00/unit',
            presence:'remote',
            status:'pending'
        },
        {
            id: '3',
            serviceName:'Security Audit',
            price:'$180.00/unit',
            presence:'on-site',
            status:'rejected'
        },
    
    ]
    return (
        <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
            <Header title="Services" subtitle="View and manage your services"/>
            <Button variant="contained" size="small" sx={{flexShrink:0}}>
                <AddIcon/>
                Add Service 
            </Button>
        </div>
        <Box sx={{ maxHeight: '100%', width: '100%' }}>
        <GridComponent rows={rows} columns={columns}/>
       </Box>
        </div>
    )
}

export default Services