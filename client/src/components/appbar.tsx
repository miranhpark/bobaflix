import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

const bobaEmoji = '\u{1F9CB}';

export default function BobaflixAppBar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar sx={{ marginBottom: 2 }}>
                    <Icon aria-label="menu" sx={{ fontSize: 45, margin: 2 }}>
                        {bobaEmoji}
                    </Icon>
                    <Typography variant="h4" color="inherit" component="div" sx={{ marginTop: 2 }}>
                        Bobaflix
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}