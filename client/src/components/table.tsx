import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'review_count', headerName: 'Stars', type: 'number', width: 90 },
    { field: 'rating', headerName: 'Rating', type: 'number', width: 90 },
    { field: 'distance', headerName: 'Distance', type: 'number', width: 90 },
    { field: 'name', headerName: 'Name', sortable: false, width: 160 },
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