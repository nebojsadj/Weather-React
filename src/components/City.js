import React from "react";
import { useSelector } from "react-redux";

function City() {
  const cityData = useSelector((state) => state.cityData);
  const error = useSelector((state) => state.error);
  const {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    icon,
    description,
  } = cityData;

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8 offset-2">
          <h1 className="text-center display-4 text-light">
            {error === "" ? `${name} , ${country}` : error}
          </h1>
          <div className="row">
            <div className="col-10 offset-1 ">
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="wthr img"
                className="mx-auto d-block"
              />
              <h3 className="text-center mt-2 text-light display-4">
                {`${Math.ceil(temp - 273)} ° C`}
              </h3>
              <div className="row">
                <div className="col-8 offset-2 mt-3">
                  <h3 className="mt-4 text-light float-left">{`min ${Math.ceil(
                    temp_min - 273
                  )} ° C`}</h3>
                  <h3 className="mt-4 text-light float-right">{`min ${Math.ceil(
                    temp_max - 273
                  )} ° C`}</h3>
                </div>
              </div>

              <h3 className="text-center text-light mt-5">{description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City;
