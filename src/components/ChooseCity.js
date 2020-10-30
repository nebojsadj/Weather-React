import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch_thunk } from "./redux/actions";

function ChooseCity() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const changeCityName = () => {
    dispatch(fetch_thunk(city));
    setCity("");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            value={city}
            placeholder="enter city name"
            className="form-control text-center text-light"
            autoComplete="off"
          />

          <button
            onClick={changeCityName}
            className="btn btn-outline-warning float-center mt-4 mx-auto d-block"
          >
            Get weather
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseCity;
