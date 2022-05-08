import React, { memo, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { SelectComponent } from '../../components/Dropdown';
import { ContentContext } from '../../context/contentContext';
import Button from '@mui/material/Button';

const ToyAction = memo(
    ({
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
                <Grid item xs={2}>
                    <SelectComponent
                        id="row"
                        label="Row"
                        handleChange={handleChange}
                        value={robotPosition.row}
                        options={content.row}
                    />
                </Grid>
                <Grid item xs={2}>
                    <SelectComponent
                        id="column"
                        label="Col"
                        handleChange={handleChange}
                        value={robotPosition.column}
                        options={content.column}
                    />
                </Grid>
                <Grid item xs={2}>
                    <SelectComponent
                        id="direction"
                        label="Facing"
                        handleChange={handleChange}
                        value={robotPosition.direction}
                        options={content.directions}
                    />
                </Grid>
                <Grid container xs={6} spacing={0} rowSpacing={2}>
                    <Grid item xs={3}>
                        <Button variant="contained" type="button" onClick={robotPlaceClick}>
                            Place ROBOT
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" type="button" onClick={reportClick}>
                            Report
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" type="button" onClick={placeWallClick}>
                            Place Wall
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" type="button" onClick={moveClick}>
                            Move
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" type="button" onClick={() => directionChangeClick(true)}>
                            Left
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" type="button" onClick={() => directionChangeClick(false)}>
                            Right
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
);

export { ToyAction };
