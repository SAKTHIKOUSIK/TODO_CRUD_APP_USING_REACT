import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomeScreen = () => {
    return (
        <Box textAlign="center">
            <Box component="figure">
                <Box
                    component="img"
                    src="/img/todolist.svg"
                />
            </Box>
            <Box mt={3}>
                <Typography variant="h5">
                    Add Task to get started...
                </Typography>
            </Box>
        </Box>
    );
};

export default WelcomeScreen;