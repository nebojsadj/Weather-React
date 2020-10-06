import React from "react";

function City({ state, error }) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8 offset-2">
          <h1 className="text-center display-4 text-light">
            {error === "" ? `${state.city} , ${state.country}` : error}
          </h1>
          <div className="row">
            <div className="col-10 offset-1 ">
              <img
                src={`http://openweathermap.org/img/wn/${state.icon}@2x.png`}
                alt="wthr img"
                className="mx-auto d-block"
              />
              <h3 className="text-center mt-2 text-light display-4">
                {`${state.temp} ° C`}
              </h3>
              <div className="row">
                <div className="col-8 offset-2 mt-3">
                  <h3 className="mt-4 text-light float-left">{`min ${state.min} ° C`}</h3>
                  <h3 className="mt-4 text-light float-right">{`min ${state.max} ° C`}</h3>
                </div>
              </div>

              <h3 className="text-center text-light mt-5">
                {state.description}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City;
