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
      <div className="navbar mt-14 container flex justify-between items-center">
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
        className="header-bg w-100 mb-44"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/element.png"
          })`,
        }}
      >
        <div className="container mt-24 pt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
          <div className="header-1 pt-28 col-span-2">
            <h1 className="mb-4">Virtual healthcare for you</h1>
            <p className="mb-7">
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
        className="service-bg-element w-100 mb-56"
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
          <div className="our-service gap-6 mb-24 flex flex-col text-center">
            <h3>Our services</h3>
            <img
              src={process.env.PUBLIC_URL + "/Assets/rectangle.svg"}
              alt="rectangle"
              style={{ height: "2px" }}
            />
            <p className="px-32">
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
          <div
            className="service-btn text-center"
            style={{ marginTop: "72px" }}
          >
            Learn more
          </div>
        </div>
      </div>
      {/* Banner 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-11">
        <div className="banner1-content-1 flex justify-end col-span-1">
          <img
            src={
              process.env.PUBLIC_URL +
              "/Assets/banner-trafalgar-illustration-1.png"
            }
            alt="trafalgar-illustration"
          />
        </div>
        <div className="banner1-content-2 col-span-1 ps-28 pe-48 pt-14 me-9">
          <h3>Leading healtcare providers</h3>
          <img
            src={process.env.PUBLIC_URL + "/Assets/rectangle.svg"}
            alt="rectangle"
            style={{ height: "2px", margin: "31px 0px" }}
          />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <div
            className="service-btn text-center"
            style={{ marginTop: "37px", marginBottom: "32px" }}
          >
            Learn more
          </div>
        </div>
      </div>
      {/* Banner 2 */}
      <div
        className="banner2-bg w-100"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/element.png"
          })`,
        }}
      >
        <div className="pt-56 grid grid-cols-1 xl:grid-cols-2 mx-11">
          <div className="banner2-content-1 col-span-1 pt-9 ps-60 pe-28 mb-64 me-8">
            <h3 className="pe-5">Download our mobile apps</h3>
            <img
              src={process.env.PUBLIC_URL + "/Assets/rectangle.svg"}
              alt="rectangle"
              style={{ height: "2px", margin: "31px 0px" }}
            />
            <p>
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <div
              className="service-btn text-center"
              style={{ marginTop: "37px", marginBottom: "32px" }}
            >
              Learn more
            </div>
          </div>
          <div className="banner2-content-2 flex justify-start col-span-1">
            <img
              src={
                process.env.PUBLIC_URL +
                "/Assets/banner-trafalgar-illustration-2.png"
              }
              alt="trafalgar-illustration"
            />
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div
        className="testimonial-bg container flex flex-col items-center mb-56"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/element-full.svg"
          })`,
        }}
      >
        <div
          className="testi-content flex flex-col items-center mb-12"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/element.svg"
            })`,
          }}
        >
          <h3>What our customer are saying</h3>
          <img
            src={process.env.PUBLIC_URL + "/Assets/rectangle.svg"}
            alt="rectangle"
            style={{ height: "2px" }}
            className="rectangle-wht"
          />
          <div className="testi-card grid grid-cols-1 xl:grid-cols-2">
            <div className="flex gap-8 items-center">
              <img
                src={process.env.PUBLIC_URL + "/Assets/image-profile.png"}
                alt="image-profile"
                className="profile-border"
              />
              <div>
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
              </div>
            </div>
            <div>
              <p className="ps-4 pe-12">
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-testi flex gap-24">
          <img
            src={process.env.PUBLIC_URL + "/Assets/arrow-left.svg"}
            alt="arrow-left"
          />
          <div className="flex gap-5">
            <img
              src={process.env.PUBLIC_URL + "/Assets/ellipse-bold.svg"}
              alt="ellipse-bold"
            />
            <img
              src={process.env.PUBLIC_URL + "/Assets/ellipse.svg"}
              alt="ellipse"
            />
            <img
              src={process.env.PUBLIC_URL + "/Assets/ellipse.svg"}
              alt="ellipse"
            />
            <img
              src={process.env.PUBLIC_URL + "/Assets/ellipse.svg"}
              alt="ellipse"
            />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/Assets/arrow-right.svg"}
            alt="arrow-right"
          />
        </div>
      </div>
      {/* Article */}
      <div
        className="article-bg w-100 flex flex-col items-center"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/element-article.svg"
          })`,
        }}
      >
        <h3>Check out our latest article</h3>
        <img
          src={process.env.PUBLIC_URL + "/Assets/rectangle.svg"}
          alt="rectangle"
          style={{ height: "2px", marginTop: "26px", marginBottom: "37px" }}
        />
        <div
          className="article-content container py-11 mb-6 flex justify-center flex-wrap gap-9"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/element-full.svg"
            })`,
          }}
        >
          <div className="article-card">
            <img
              src={process.env.PUBLIC_URL + "/Assets/image-article-1.png"}
              alt="article"
              className="article-img"
            />
            <div className="article-desc pt-6 px-8">
              <h3 className="pe-4 mb-3">
                Disease detection, check up in the laboratory
              </h3>
              <p className="pe-6">
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <div className="readmore-btn flex items-center mt-6 gap-4">
                Read more{" "}
                <img
                  src={process.env.PUBLIC_URL + "/Assets/arrow-right.svg"}
                  alt="arrow-right"
                  style={{ height: "9px" }}
                />
              </div>
            </div>
          </div>
          <div className="article-card">
            <img
              src={process.env.PUBLIC_URL + "/Assets/image-article-2.png"}
              alt="article"
              className="article-img"
            />
            <div className="article-desc pt-6 px-8">
              <h3 className="pe-4 mb-3">
                Herbal medicines that are safe for consumption{" "}
              </h3>
              <p className="pe-6">
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <div className="readmore-btn flex items-center mt-6 gap-4">
                Read more{" "}
                <img
                  src={process.env.PUBLIC_URL + "/Assets/arrow-right.svg"}
                  alt="arrow-right"
                  style={{ height: "9px" }}
                />
              </div>
            </div>
          </div>
          <div className="article-card">
            <img
              src={process.env.PUBLIC_URL + "/Assets/image-article-3.png"}
              alt="article"
              className="article-img"
            />
            <div className="article-desc pt-6 px-8">
              <h3 className="pe-4 mb-3">
                Natural care for healthy facial skin{" "}
              </h3>
              <p className="pe-6">
                A healthy lifestyle should start from now and also for your skin
                health. There are some...{" "}
              </p>
              <div className="readmore-btn flex items-center mt-6 gap-4">
                Read more{" "}
                <img
                  src={process.env.PUBLIC_URL + "/Assets/arrow-right.svg"}
                  alt="arrow-right"
                  style={{ height: "9px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="view-all-btn text-center">View all</div>
      </div>
    </div>
  );
}

export default App;
