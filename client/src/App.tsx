import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import BobaflixAppBar from './components/appbar';
import BobaDataTable from './components/table';
import LocationRadioSelect from './components/radio'
import { NetflixLocations } from './utils/types';
import { defineStars } from './utils/utils';

const App = () => {
  const [yelpData, setYelpData] = useState<Array<Object>>([]);
  const [statusOK, setStatusOK] = useState<boolean>(true);
  const [httpStatus, setHttpStatus] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<NetflixLocations>(NetflixLocations.LosGatos);

  // TODO: maybe reorganize to return a promise<json>
  useEffect(() => {
    const fetchData = async () => {
      try {
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
          setStatusOK(false);
          setHttpStatus(`HTTP error - status: ${response.status} ${response.statusText}`);
          throw new Error(`HTTP error - status: ${response.status}`);
        }

        // parse the JSON response
        const result = await response.json();

        // add star rating data
        const addStars = defineStars(result.data.businesses)

        // set the data in the state
        setYelpData(addStars);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedLocation]);

  return (
    <div>
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
          {httpStatus}
        </Typography>
      )}
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
