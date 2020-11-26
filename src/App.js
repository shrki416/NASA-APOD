import React, { useState, useEffect, useRef } from "react";
import Nasa from "./NASA";
import axios from "axios";
import styled from "styled-components";

const App = () => {
  const [data, setData] = useState([]);
  const getPhotoOfTheDay = useRef(() => {});

  const API_KEY = `A4ACJGPvwBJhrAH9QuRTXnUku7LeLcZv8JFd0AiP`;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  getPhotoOfTheDay.current = () => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPhotoOfTheDay.current();
  }, [getPhotoOfTheDay]);

  const App = styled.div`
    h1 {
      font-family: nasalization, sans-serif;
      font-style: normal;
      font-weight: 400;
      color: #0b3d91;
    }

    h1,
    h2 {
      text-align: center;
    }
  `;

  return (
    <App>
      <h1>NASA</h1>
      <h2>Astronomy Picture of the Day</h2>
      <Nasa
        copyright={data.copyright}
        date={data.date}
        title={data.title}
        image={data.hdurl}
        explanation={data.explanation}
      />
    </App>
  );
};

export default App;
