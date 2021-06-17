import React, { useEffect, useState } from "react";
import Directory from "./components/Directory/Directory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;
