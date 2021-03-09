import React from "react";
import Navigation from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <div className="myContainer">
      <Navigation />

      <div className="mt-5 header d-flex justify-content-center align-items-center">
        <h1>Daily Team Affair</h1>
      </div>
    </div>
  );
};

export default Header;
