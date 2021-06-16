import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container heading">
        <h1 className="display-4">React Employee Directory</h1>
        <p className="lead">
          See all current employee information in aggregate
        </p>
      </div>
    </div>
  );
};

export default Header;
