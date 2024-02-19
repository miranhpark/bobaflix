
import '@fontsource/bebas-neue';
import { createTheme } from '@mui/material/styles';

const netflixRed = '#E50914';

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },

    },
    components: {
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    "&.Mui-checked": {
                        color: netflixRed,
                    }
                },

            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: netflixRed,
                },
                underlineAlways: {
                    color: netflixRed,
                    textDecorationColor: netflixRed,
                    fontSize: 16,
                }
            },
        },
    },
}
);