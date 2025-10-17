import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home" className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Dialysis Made Simple. Life Made Easier. Welcome to{" "}
            <span className="highlight">DialiEase</span>
          </h1>
          <p className="primary-text">
            Take charge of your dialysis journey with DialiEase, the innovative
            app that bridges the gap between daily home treatment and
            professional healthcare support.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1q6DpPPOl72IpEFIktwJLpcehWUXBAHte"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Download Now <FiArrowDown />
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
