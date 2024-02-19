import '@fontsource/bebas-neue';
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
                    <Icon aria-label="menu" sx={{ fontSize: '200%', margin: 1, overflow: 'visible' }}>
                        {bobaEmoji}
                    </Icon>
                    <Typography variant="h4" color='#E50914' component="div" sx={{ marginTop: 2, fontFamily: 'Bebas Neue' }}>
                        Bobaflix
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}