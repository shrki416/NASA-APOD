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
      display: flex;
    }

    h2 {
      color: #1e272e;
    }
  `;

  const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <App>
      <Header>
        <h1>NASA</h1>
        <h2>Astronomy Picture of the Day</h2>
      </Header>
      <Nasa data={data} />
    </App>
  );
};

export default App;
