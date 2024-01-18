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
    <div className="container">
      {/* navbar */}
      <div className="navbar flex justify-between items-center">
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
      {/* Header */}
      <div className="header grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
        <div className="header-1 col-span-2">
          <img
            src={process.env.PUBLIC_URL + "/Assets/element.png"}
            alt="element"
          />
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <div className="consult-btn text-center">Consult today</div>
        </div>
        <div className="header-2 col-span-3 flex justify-end">
          <img
            src={
              process.env.PUBLIC_URL +
              "/Assets/trafalgar-header-illustration-1.png"
            }
            alt="header-illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
