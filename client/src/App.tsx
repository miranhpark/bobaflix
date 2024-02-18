import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import DataTable from './components/table';
import HeaderAppBar from './components/appbar';

const App = () => {
  const [data, setData] = useState(null);
  const [statusOK, setStatusOK] = useState(true);
  const [httpStatus, setHttpStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch data from the Express backend
        const response = await fetch('http://localhost:8080/api/yelp');

        if (!response.ok) {
          setStatusOK(false);
          setHttpStatus(`HTTP error - status: ${response.status} ${response.json}`);
          throw new Error(`HTTP error - status: ${response.status}`);
        }

        // parse the JSON response
        const result = await response.json();

        // set the data in the state
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div>
      <HeaderAppBar />
      {statusOK ? (
        <div>
          <Typography variant="body1" color="inherit" component="div" sx={{ margin: 5 }}>
            description goes here
          </Typography>
          {data ? (
            <DataTable rows={rows} />
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
