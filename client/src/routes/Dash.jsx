// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import Header from './../components/Header.jsx';

function Docs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true


  useEffect(() => {
    fetch("http://localhost:8080/api/arr2021")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <>
      
      
      <div>
        {loading ? (
          <img src="/images/Double Ring-1s-200px.svg" alt="Loading..." />
        ) : (
          data !== null && data.length > 0 ? (
            data.map((item) => (
              <h1 key={item.id}>{item.name}</h1>
            ))
          ) : (
            <p>No data available</p>
          )
        )}
      </div>
    </>
  );
}

export default Docs;
