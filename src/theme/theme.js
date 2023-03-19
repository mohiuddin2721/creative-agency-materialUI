import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#111430',
            yellow: '#FBD062',
            green: '#7AB259',
        },
    },
    components: {
        // Name of the component
        MuiContainer: {
            defaultProps: {
                masWidth: 'lg',
            }
        },
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                    padding: '0.6rem 2.5rem',
                },
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
            }
        },
    },
});