import React from "react";
import "./About.css";
const img1 = require("../assets/download (1).jpeg");
const img2 = require("../assets/180357260-isometric-grocery-market-interior-supermarket-showcase-and-checkout-counter-groc (1).webp");

function About() {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center mt-5 display-3 fw-bold">
          About <span className="theme-text">Us</span>
        </h1>
        <hr className="mx-auto mb-5 w-25" />
        <div className="row mb-5">
          <div className="col-12 col-sm-3 col-md-3 m-auto">
            <div className="card shadow">
              <img src={img1} alt className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Our Mission</h3>
                <hr className="mx-auto w-75" />
                <p>
                  We Sabari stores are known for quality and good products.We
                  ensure to make customers more satisfied than revenue.
                </p>
                <br />
                <p>We serve quality......That you deserve</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={img2} alt className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Where we are?</h3>
                <hr className="mx-auto w-75" id="place" />
                <p>
                  352 near and before anna statue Perundurai, Tamil Nadu 638052
                  India
                </p>
                <br />
                <p>
                  Address: 57E, Erode Rd, near CANARA BANK - KAVANDAPADI,
                  Kavandapadi, Tamil Nadu 638455
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
