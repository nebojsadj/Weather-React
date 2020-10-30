import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./types";

const api = {
  key: "8872c766bfcbd0e51f6217c1e8eaaf87",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const fetch_thunk = (city) => {
  return (dispatch) => {
    dispatch(fetch_loading());
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        const { name, main, sys, weather } = data;
        const { country } = sys;
        const { temp, temp_min, temp_max } = main;
        const { icon, description } = weather[0];
        dispatch(
          fetch_success({
            name,
            country,
            temp,
            temp_min,
            temp_max,
            icon,
            description,
          })
        );
      })
      .catch((error) => dispatch(fetch_error(error)));
  };
};

export const fetch_loading = () => {
  return {
    type: FETCH_DATA_LOADING,
  };
};

export const fetch_success = (city) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: city,
  };
};

export const fetch_error = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};
