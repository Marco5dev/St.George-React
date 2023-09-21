// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import loading from "/images/Double Ring-1s-200px.svg";

function Docs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData); // Add this line to check if data is received
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* <MarkdownReader filePath={mdFile}/> */}
      {data && data.length > 0 ? <h1>{data.name}</h1> :  <img src={loading} alt="Image Description" />}
    </>
  );
}

export default Docs;
