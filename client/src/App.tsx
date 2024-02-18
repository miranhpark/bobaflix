import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import DataTable from './components/table';
import HeaderAppBar from './components/appbar';
import { defineStars } from './utils/utils';

const App = () => {
  // TODO: fix data type
  const [data, setData] = useState([]);
  const [statusOK, setStatusOK] = useState(true);
  const [httpStatus, setHttpStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // // fetch data from the Express backend
        // const response = await fetch('http://localhost:3001/api/yelp');

        // if (!response.ok) {
        //   setStatusOK(false);
        //   setHttpStatus(`HTTP error - status: ${response.status} ${response.statusText}`);
        //   throw new Error(`HTTP error - status: ${response.status}`);
        // }

        // // parse the JSON response
        // const result = await response.json();

        const response = await fetch('http://localhost:3000/test.json', {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        });

        const result = await response.json();

        const addStars = defineStars(result.businesses)

        // set the data in the state
        console.log(addStars)
        setData(addStars);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // TODO: make this modular
  // TODO: styling everything
  // TODO: rename data var
  return (
    <div>
      <HeaderAppBar />
      {statusOK ? (
        <div>
          <Typography variant="body1" color="inherit" component="div" sx={{ margin: 5 }}>
            Queries the <Link href="https://docs.developer.yelp.com/reference/v3_business_search">Yelp API</Link> for
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
