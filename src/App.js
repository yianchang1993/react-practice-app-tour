import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TourList from "./components/TourList/TourList.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
