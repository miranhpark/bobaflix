import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import { NetflixLocation } from '../utils/types';

export default function LocationRadioSelect(props: {
    selectedLocation: string,
    setSelectedLocation: (location: NetflixLocation) => void
}) {

    const handleChange = (event: any) => {
        props.setSelectedLocation(event.target.value);
    };
    return (
        <Paper elevation={1}>
            <FormControl component="fieldset" sx={{ margin: 3, marginLeft: 5 }}>
                <FormLabel component="legend">Select a location:</FormLabel>
                <RadioGroup
                    row
                    aria-label="options"
                    name="options"
                    value={props.selectedLocation}
                    onChange={handleChange}
                >
                    <FormControlLabel value={NetflixLocation.LosGatos} control={<Radio />} label={NetflixLocation.LosGatos} />
                    <FormControlLabel value={NetflixLocation.NewYork} control={<Radio />} label={NetflixLocation.NewYork} />
                    <FormControlLabel value={NetflixLocation.LosAngeles} control={<Radio />} label={NetflixLocation.LosAngeles} />
                </RadioGroup>
            </FormControl>
        </Paper>
    );
};

