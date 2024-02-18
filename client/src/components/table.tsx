import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { distanceHuman } from '../utils/utils'

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        flex: 0.5,
        minWidth: 100,
    },
    {
        field: 'stars',
        headerName: 'Stars',
        flex: 0.25,
        minWidth: 100,
        renderCell: (params) => {
            console.log(params)
            return (
                <>
                    <Box component="img" src={params.value} sx={{ height: '40%' }} />
                </>
            );
        },
    },
    {
        field: 'rating',
        headerName: 'Rating',
        type: 'number',
        flex: 0.25,
        minWidth: 100,
    },
    {
        field: 'distance',
        headerName: 'Distance',
        type: 'number',
        flex: 0.25,
        minWidth: 100,
        renderCell: (params) => {
            return (distanceHuman(params.value).toString() + " mi")
        }
    },
];

export default function DataTable(props: { rows: Array<Object> }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}