import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    function getEmps() {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((json) => {
          console.log({ json });
          console.log({});
        });
    }

    getEmps();
    console.log("All done");
  }, []);

  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
