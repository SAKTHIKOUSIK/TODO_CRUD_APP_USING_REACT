import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#f5f9fc"
                },
                img: {
                    userSelect: "none",
                    verticalAlign: "middle"
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    backgroundColor: "#ECEDF6",
                    // color: "info.main",
                    borderRadius: "4px",
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#518AFF"
        }
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