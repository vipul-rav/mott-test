import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { SelectComponent } from '../../components/Dropdown';
import { ContentContext } from '../../context/contentContext';
import Button from '@mui/material/Button';

const ToyAction = ({ handleChange, direction = '' }) => {
    const content = useContext(ContentContext);
    return (
        <Grid container spacing={1}>
            <Grid item md={2}>
                <SelectComponent
                    id="row"
                    label="Row"
                    handleChange={handleChange}
                    value={direction}
                    options={content.row}
                />
            </Grid>
            <Grid item md={2}>
                <SelectComponent
                    id="column"
                    label="Col"
                    handleChange={handleChange}
                    value={direction}
                    options={content.column}
                />
            </Grid>
            <Grid item md={2}>
                <SelectComponent
                    id="direction"
                    label="Facing"
                    handleChange={handleChange}
                    value={direction}
                    options={content.directions}
                />
            </Grid>
            <Grid item md={2}>
                <Button variant="contained">PLACE_ROBOT</Button>
            </Grid>
        </Grid>
    );
};

export { ToyAction };
