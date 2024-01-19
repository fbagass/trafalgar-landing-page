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
    <div className="page-size">
      {/* navbar */}
      <div className="navbar container flex justify-between items-center">
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
      <div
        className="header-bg w-100"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/element.png"
          })`,
        }}
      >
        <div className="header container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
          <div className="header-1 col-span-2">
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
      {/* Our Service */}
      <div
        className="service-bg-element w-100"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/bg-element.svg"
          })`,
        }}
      >
        <div
          className="service-element container flex flex-col items-center"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/element-full.svg"
            })`,
          }}
        >
          <div className="our-service flex flex-col text-center">
            <h3>Our services</h3>
            <img
              src={process.env.PUBLIC_URL + "/Assets/rectangle.svg"}
              alt="rectangle"
              style={{ height: "2px" }}
            />
            <p>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </div>
          <div className="service-content flex flex-row flex-wrap justify-center gap-8">
            <div className="service-card">
              <img
                src={process.env.PUBLIC_URL + "/Assets/frame-search-doctor.svg"}
                alt="search-doctor"
              />
              <h4>Search Doctor</h4>
              <p>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="service-card">
              <img
                src={
                  process.env.PUBLIC_URL + "/Assets/frame-online-pharmacy.svg"
                }
                alt="online-pharmacy"
              />
              <h4>Online pharmacy</h4>
              <p>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="service-card">
              <img
                src={process.env.PUBLIC_URL + "/Assets/frame-consultation.svg"}
                alt="consultation"
              />
              <h4>Consultation</h4>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="service-card">
              <img
                src={process.env.PUBLIC_URL + "/Assets/frame-detail-info.svg"}
                alt="detail-info"
              />
              <h4>Detail info</h4>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="service-card">
              <img
                src={
                  process.env.PUBLIC_URL + "/Assets/frame-emergency-care.svg"
                }
                alt="emergency-care"
              />
              <h4>Emergency care</h4>
              <p>
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
            <div className="service-card">
              <img
                src={process.env.PUBLIC_URL + "/Assets/frame-tracking.svg"}
                alt="tracking"
              />
              <h4>Tracking</h4>
              <p>Track and save your medical history and health data</p>
            </div>
          </div>
          <div className="service-btn text-center">Learn more</div>
        </div>
      </div>
    </div>
  );
}

export default App;
