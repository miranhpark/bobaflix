import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import DataTable from './components/table';
import HeaderAppBar from './components/appbar';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the Express backend
        const response = await fetch('http://localhost:8080/api/joke');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();

        // Set the data in the state
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <HeaderAppBar />
      <Typography variant="body1" color="inherit" component="div" sx={{ margin: 5 }}>
        Description goes here
      </Typography>
      {data ? (
        <DataTable />
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default App;
