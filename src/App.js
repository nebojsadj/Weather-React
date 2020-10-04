import React, { useState } from "react";
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

  const fetchData = (city) => {
    axios
      .get(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((res) => {
        const responce = res.data;
        const { name, sys, weather, main } = responce;
        const { country } = sys;
        const { icon, description } = weather[0];
        const { temp, temp_min, temp_max } = main;

        setState({
          city: name,
          country: country,
          icon: icon,
          temp: Math.ceil(temp - 273),
          min: Math.ceil(temp_min - 273),
          max: Math.ceil(temp_max - 273),
          description: description,
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
