import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import ChooseCity from "./components/ChooseCity";
import City from "./components/City";
import { fetch_thunk } from "./components/redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_thunk("Beograd"));
  }, []);

  return (
    <div>
      <Header />
      <ChooseCity />
      <City />
    </div>
  );
}

export default App;
