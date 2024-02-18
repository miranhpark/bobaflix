import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import DataTable from './components/table';
import HeaderAppBar from './components/appbar';
import { defineStars } from './utils/utils';

const App = () => {
  // TODO: fix all types e.g. data prop and naming
  const [data, setData] = useState([]);
  const [statusOK, setStatusOK] = useState(true);
  const [httpStatus, setHttpStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch data from the Express backend
        const requestData = {
          // location: '121 Albright Wy, Los Gatos, CA 95032'
          // location: '888 Broadway, New York, NY 10003'
          location: '5808 Sunset Blvd, Los Angeles, CA 90028'
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
        setData(addStars);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // TODO: make this modular
  // TODO: styling everything
  return (
    <div>
      <HeaderAppBar />
      {statusOK ? (
        <div>
          <Typography variant="body1" color="inherit" component="div" sx={{ margin: 5 }}>
            Queries the <Link href="https://docs.developer.yelp.com/reference/v3_business_search" target="_blank">Yelp API</Link> for
            boba shops at select Netflix locations (click the store name to go to a shop's Yelp page - happy boba-ing!)
          </Typography>
          {data ? (
            <DataTable rows={data} />
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

export default App;
