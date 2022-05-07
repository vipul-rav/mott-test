import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ToyAction } from './ToyAction';

const ToyRobotDashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid spacing={2}>
                <Grid md={12}>
                    <ToyAction />
                </Grid>
            </Grid>
        </Box>
    );
};

export { ToyRobotDashboard };
