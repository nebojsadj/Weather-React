import React from "react";

function City({ state }) {
  return (
    <div className="conteiner">
      <div className="row mt-5">
        <div className="col-8 offset-2">
          <h1 className="text-center display-4 text-light">{state.city}</h1>
          <div className="row">
            <div className="col-10 offset-1 ">
              <img
                src={`http://openweathermap.org/img/wn/${
                  state.icon || "01n"
                }@2x.png`}
                alt="wthr img"
                className="mx-auto d-block"
              />
              <h3 className="text-center mt-2 text-light display-4">
                {`${state.temp} ° C`}
              </h3>
              <div className="row">
                <div className="col-6 offset-3 mt-3">
                  <h3 className="mt-4 text-light float-left">{`min ${state.min} ° C`}</h3>
                  <h3 className="mt-4 text-light float-right">{`min ${state.max} ° C`}</h3>
                </div>
              </div>

              <h3 className="text-center text-light mt-4">
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