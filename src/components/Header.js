import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography variant="h5">
                TODO-X
            </Typography>
            <Button
                variant="text"
                color="primary"
                startIcon={<LightModeIcon />}

            >
                Toggle Dark Mode
            </Button>
        </Stack>
    );
};

export default Header;