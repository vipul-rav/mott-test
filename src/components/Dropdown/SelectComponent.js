import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const SelectComponent = ({ id, label, handleChange, value, options }) => {
    return (
        <>
            <InputLabel id={`label-${id}`}>{label}</InputLabel>
            <Select labelId={`label-${id}`} id={id} name={id} label={label} value={value} onChange={handleChange}>
                {options &&
                    options.map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
            </Select>
        </>
    );
};

export { SelectComponent };
