import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import BobaflixAppBar from './components/appbar';
import BobaDataTable from './components/table';
import LocationRadioSelect from './components/radio'
import { customTheme } from './utils/theme';
import { NetflixLocation, YelpBusiness } from './utils/types';
import { defineStars } from './utils/utils';


async function fetchYelpData(selectedLocation: NetflixLocation): Promise<Array<YelpBusiness>> {
  // fetch data from the Express backend
  const requestData = {
    location: selectedLocation
  };

  const url = 'http://localhost:3001/api/yelp'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error - status: ${response.status} ${response.statusText}`);
  }

  // parse the JSON response
  const result = await response.json();

  // take just the businesses data
  const businesses = result.data.businesses
  return businesses
}

const App = () => {
  const [yelpData, setYelpData] = useState<Array<YelpBusiness>>([]);
  const [statusOK, setStatusOK] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<NetflixLocation>(NetflixLocation.LosGatos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatusOK(true)
        setHttpError('')
        const result = await fetchYelpData(selectedLocation)

        // add star rating data
        const addStars = defineStars(result)

        // set the data in the state
        setYelpData(addStars);
      } catch (error) {
        setStatusOK(false);
        let message = 'Unknown error'
        if (error instanceof Error) message = error.message;
        setHttpError(message)
        console.error('Error fetching data: ', message);
      }
    };

    fetchData();
  }, [selectedLocation]);

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <BobaflixAppBar />
        {statusOK ? (
          <div>
            <AppDescription />
            <LocationRadioSelect selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
            {yelpData ? (
              <BobaDataTable rows={yelpData} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ) : (
          <Typography variant="body1" color="inherit" component="div" sx={{ margin: 5 }}>
            {httpError}
          </Typography>
        )}
      </ThemeProvider>
    </div>
  );
};

function AppDescription() {
  return (
    <Typography variant="body1" color="inherit" component="div" sx={{ margin: 5 }}>
      Queries the <Link href="https://docs.developer.yelp.com/reference/v3_business_search" target="_blank">Yelp API</Link> for
      boba shops at select Netflix locations (click the store name to go to a shop's Yelp page - happy boba-ing!)
    </Typography>
  )
}

export default App;
