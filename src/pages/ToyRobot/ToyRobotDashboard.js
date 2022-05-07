import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ToyAction } from './ToyAction';

const ToyRobotDashboard = ({
    formik,
    isRobotPlaced,
    robotPosition,
    placeWallClick,
    moveClick,
    directionChangeClick
}) => {
    const [showReport, setReport] = useState(false);
    const { handleChange, handleSubmit, errors, values } = formik;
    const reportClick = () => {
        isRobotPlaced && setReport(true);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item md={12}>
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
                    <Grid md={12}>
                        {robotPosition &&
                            Object.entries(robotPosition).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        {key}:{value}
                                    </div>
                                );
                            })}
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export { ToyRobotDashboard };
