import React from "react";
import { useSelector } from "react-redux";

function City() {
  const loading = useSelector((state) => state.loading);
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
        <div className="col-10 offset-1">
          <h1 className="text-center display-4 text-light">
            {(loading && "Loading...") || error || `${name} , ${country}`}
          </h1>
          {!error && (
            <div className="row">
              <div className="col-10 offset-1 ">
                {icon && (
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="iconq"
                    className="mx-auto d-block"
                  />
                )}
                <h3 className="text-center mt-2 text-light display-4">
                  {temp && `${Math.ceil(temp - 273)} ° C`}
                </h3>
                <div className="row">
                  <div className="col-10 offset-1 mt-3">
                    <h3 className="mt-4 text-light float-left ml">
                      {temp_min && `min ${Math.ceil(temp_min - 273)} ° C`}
                    </h3>
                    <h3 className="mt-4 text-light float-right mr">
                      {temp_max && `min ${Math.ceil(temp_max - 273)} ° C`}
                    </h3>
                  </div>
                </div>

                <h3 className="text-center text-light mt-5 mb">
                  {description && description}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default City;
