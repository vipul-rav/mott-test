import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { SelectComponent } from '../../components/Dropdown';
import { ContentContext } from '../../context/contentContext';
import Button from '@mui/material/Button';

const ToyAction = ({
    handleChange,
    robotPosition,
    robotPlaceClick,
    reportClick,
    placeWallClick,
    moveClick,
    directionChangeClick
}) => {
    const content = useContext(ContentContext);
    return (
        <Grid container spacing={1}>
            <Grid item md={2}>
                <SelectComponent
                    id="row"
                    label="Row"
                    handleChange={handleChange}
                    value={robotPosition.row}
                    options={content.row}
                />
            </Grid>
            <Grid item md={2}>
                <SelectComponent
                    id="column"
                    label="Col"
                    handleChange={handleChange}
                    value={robotPosition.column}
                    options={content.column}
                />
            </Grid>
            <Grid item md={2}>
                <SelectComponent
                    id="direction"
                    label="Facing"
                    handleChange={handleChange}
                    value={robotPosition.direction}
                    options={content.directions}
                />
            </Grid>
            <Grid container md={6} spacing={0}>
                <Grid item md={3}>
                    <Button variant="contained" onClick={robotPlaceClick}>
                        Place ROBOT
                    </Button>
                </Grid>
                <Grid item md={3}>
                    <Button variant="contained" onClick={reportClick}>
                        Report
                    </Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" onClick={placeWallClick}>
                        Place Wall
                    </Button>
                </Grid>
                <Grid item md={3}>
                    <Button variant="contained" onClick={moveClick}>
                        Move
                    </Button>
                </Grid>
                <Grid item md={3}>
                    <Button variant="contained" onClick={() => directionChangeClick(true)}>
                        Left
                    </Button>
                </Grid>
                <Grid item md={3}>
                    <Button variant="contained" onClick={() => directionChangeClick(false)}>
                        Right
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { ToyAction };
