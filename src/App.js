import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const getPhotoOfTheDay = useRef(() => {});

  const API_KEY = `A4ACJGPvwBJhrAH9QuRTXnUku7LeLcZv8JFd0AiP`;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  getPhotoOfTheDay.current = () => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhotoOfTheDay.current();
  }, [getPhotoOfTheDay]);

  return (
    <div className="App">
      <h1>NASA</h1>
      <h2>Astronomy Picture of the Day</h2>
      <p>{data.copyright}</p>
      <p>{data.date}</p>
      <p>{data.title}</p>
      <img src={data.hdurl} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
};

export default App;
