import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { distanceHuman, walkingDistance } from '../utils/utils'

const bobaColumns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        flex: 0.5,
        minWidth: 100,
        renderCell: (params) => {
            return (
                <>
                    <Link href={params.row.url} target="_blank">{params.value}</Link>
                </>
            );
        },
    },
    {
        field: 'stars',
        headerName: 'Stars',
        flex: 0.2,
        minWidth: 100,
        renderCell: (params) => {
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
        flex: 0.1,
        minWidth: 100,
    },
    {
        field: 'distance',
        headerName: 'Distance',
        type: 'number',
        flex: 0.25,
        minWidth: 100,
        renderCell: (params) => {
            const thinkingEmoji = '\u{1F914}';
            const distanceText = `${distanceHuman(params.value).toString()} mi`;
            const tooltipText = `That's a ${walkingDistance(params.value).toString()} min. walk, 
                                    if you could walk through walls ${thinkingEmoji}`;
            return (
                <Tooltip title={tooltipText} arrow>
                    <Typography variant="body1" color="inherit" component="div">
                        {distanceText}
                    </Typography>
                </Tooltip>)
        }
    },
];

export default function BobaDataTable(props: { rows: Array<Object> }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rows}
                columns={bobaColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}