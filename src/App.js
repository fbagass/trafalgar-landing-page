import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Muli"],
      },
    });
  });
  return (
    <div className="container mx-auto">
      {/* navbar */}
      <div className="navbar flex justify-between items-center ">
        {/* Logo */}
        <div className="navbar-logo flex justify-center items-center gap-3">
          <div className="t-logo flex justify-center items-center">T</div>
          <p>Trafalgar</p>
        </div>
        {/* Menu */}
        <div className="navbar-menu flex gap-8">
          <div style={{ fontWeight: "700", color: "#233348" }}>Home</div>
          <div>Find a doctor</div>
          <div>Apps</div>
          <div>Testimonials</div>
          <div>About us</div>
        </div>
      </div>
    </div>
  );
}

export default App;
