import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#a9afc3"
        },
    },
    components: {
        MuiIconButton: {
            defaultProps: {
                sx: {
                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                    color: "primary.main",
                    borderRadius: "8px",
                }
            }
        },
    },
});

const AppThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;