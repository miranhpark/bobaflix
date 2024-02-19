import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';

export enum NetflixLocations {
    LosGatos = '121 Albright Wy, Los Gatos, CA 95032',
    NewYork = '888 Broadway, New York, NY 10003',
    LosAngeles = '5808 Sunset Blvd, Los Angeles, CA 90028',
}

export default function LocationRadioSelect(props: {
    selectedLocation: string,
    setSelectedLocation: (location: NetflixLocations) => void
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
                    <FormControlLabel value={NetflixLocations.LosGatos} control={<Radio />} label={NetflixLocations.LosGatos} />
                    <FormControlLabel value={NetflixLocations.NewYork} control={<Radio />} label={NetflixLocations.NewYork} />
                    <FormControlLabel value={NetflixLocations.LosAngeles} control={<Radio />} label={NetflixLocations.LosAngeles} />
                </RadioGroup>
            </FormControl>
        </Paper>
    );
};

