import React, { useEffect, useState } from "react";
//import "App.css";
import API from "./utils/API";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    API.getEmps.then((res) => {
      console.log("USE EFFECT IS HAPPENING");
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
