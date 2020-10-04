import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ChooseCity from "./components/ChooseCity";
import City from "./components/City";

function App() {
  const [state, setState] = useState({});

  const api = {
    key: "8872c766bfcbd0e51f6217c1e8eaaf87",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    fetchData("Beograd");
  }, []);

  const fetchData = (city) => {
    axios
      .get(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((res) => {
        const responce = res.data;
        setState({
          city: responce.name,
          country: responce.sys.country,
          icon: responce.weather[0].icon,
          temp: Math.ceil(responce.main.temp - 273),
          min: Math.ceil(responce.main.temp_min - 273),
          max: Math.ceil(responce.main.temp_max - 273),
          description: responce.weather[0].description,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />
      <ChooseCity fetchData={fetchData} />
      <City state={state} />
    </div>
  );
}

export default App;
