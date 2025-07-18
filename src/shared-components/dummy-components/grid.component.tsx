import { DataGrid, type GridColDef } from '@mui/x-data-grid'

function GridComponent<T>({rows, columns}:{rows:T[],columns:GridColDef[]}) {
    return(
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    )
}

export default GridComponent