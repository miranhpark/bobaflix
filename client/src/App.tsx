import React, { useState, useEffect } from 'react';

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
      <h1>React Frontend</h1>
      {data ? (
        <p>Data from Express backend: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
