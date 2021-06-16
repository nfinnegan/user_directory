import React, { useEffect, useState } from "react";
import Directory from "./components/Directory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import empDirectory from "./components/Directory";

function App() {
  useEffect(() => {
    // function getEmps() {
    //   fetch("https://randomuser.me/api/?results=20")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log({ data });
    //     });
    // }
    empDirectory();
    console.log("All done");
  }, []);

  return (
    <div className="App">
      <Header />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;
