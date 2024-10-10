import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>A Community of Scholars, Innovators, and Leaders</h1>
        <p>
          committed to providing an exceptional academic experience that fosters
          growth, innovation, and leadership. With a diverse range of programs,
          state-of-the-art facilities, and a vibrant campus life, we empower
          students to achieve their full potential. Our dedicated faculty and
          cutting-edge research prepare students for the challenges of tomorrow.
          Join us at [Educity], where education meets inspiration and
          opportunity.
        </p>
        <button className="btn">
          Learn More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
