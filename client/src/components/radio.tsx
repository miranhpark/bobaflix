import React, { useState } from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

export default function LocationRadioSelect(props: {
    selectedLocation: string,
    setSelectedLocation: (location: string) => void
}) {

    const handleChange = (event: any) => {
        props.setSelectedLocation(event.target.value);
    };

    const location1 = '121 Albright Wy, Los Gatos, CA 95032'
    const location2 = '888 Broadway, New York, NY 10003'
    const location3 = '5808 Sunset Blvd, Los Angeles, CA 90028'

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Select an Option</FormLabel>
            <RadioGroup
                row
                aria-label="options"
                name="options"
                value={props.selectedLocation}
                onChange={handleChange}
            >
                <FormControlLabel value={location1} control={<Radio />} label={location1} />
                <FormControlLabel value={location2} control={<Radio />} label={location2} />
                <FormControlLabel value={location3} control={<Radio />} label={location3} />
            </RadioGroup>
        </FormControl>
    );
};

