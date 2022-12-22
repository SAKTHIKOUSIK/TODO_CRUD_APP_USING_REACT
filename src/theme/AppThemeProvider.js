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
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontSize: "16px",

                    '@media (max-width: 576px)': {
                        fontSize: "14px",
                    }
                },
                body: {
                    backgroundColor: "#1e1e2c",
                },
                img: {
                    maxWidth: "100%",
                    height: "100%",
                    userSelect: "none",
                    verticalAlign: "middle"
                }
            }
        },
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