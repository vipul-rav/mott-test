import React, { memo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ToyAction } from './ToyAction';

const ToyRobotDashboard = memo(
    ({ formik, robotPosition, placeWallClick, moveClick, directionChangeClick, reportClick, showReport }) => {
        const { handleChange, handleSubmit, values } = formik;

        return (
            <Box sx={{ flexGrow: 1, p: 2, border: '1px solid grey' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <ToyAction
                            handleChange={handleChange}
                            robotPosition={values}
                            robotPlaceClick={handleSubmit}
                            reportClick={reportClick}
                            placeWallClick={placeWallClick}
                            moveClick={moveClick}
                            directionChangeClick={directionChangeClick}
                        />
                    </Grid>
                </Grid>
                {showReport && (
                    <Grid spacing={2}>
                        <Grid item xs={12}>
                            {robotPosition &&
                                Object.entries(robotPosition).map(([key, value]) => {
                                    return <div key={key}>{value}</div>;
                                })}
                        </Grid>
                    </Grid>
                )}
            </Box>
        );
    }
);

export { ToyRobotDashboard };
