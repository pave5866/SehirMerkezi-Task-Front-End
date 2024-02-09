import React from "react";
import "./heroSection.css";
export default function HeroSection() {
  return (
    <>
      <div id="Home" className="hero_section">
        <h1 className="hero-title">Amazing furniture for <br /> your home</h1>
        <img className="aroww" src="./Arrow.png" alt="" />
        <p className="hero-description">
          We think the chair is the most important piece of furniture in your
          home. Because if you love <br /> the chair you are sitting in chances are you
          will love the rest of the room.
        </p>
      </div>
      <div className="img-container-hero">,
        <div className="search-container">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search Your Product"
            />
            <img className="search-img" src="/search.svg" alt="" />
          </div>
        </div>

        <img className="bg-img" src="/img1.png" alt="" />
      </div>
    </>
  );
}
