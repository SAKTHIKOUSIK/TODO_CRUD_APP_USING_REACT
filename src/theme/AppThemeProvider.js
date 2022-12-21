import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
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
                    backgroundColor: "#f5f9fc",
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
                    // backgroundColor: "#00476D",
                    // color: "info.main",
                    borderRadius: "4px",
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#518AFF"
        },
    }
});

const AppThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;