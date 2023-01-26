import React from "react";
import Client from "../Client/Client";
import Conduct from "../Conduct/Conduct";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Newsteler from "../Newsteler/Newsteler";
import Reviews from "../Reviews/Reviews";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import SecuritySection from "../SecuritySection/SecuritySection";
import Happens from "./../Happens/Happens";

const Home = () => {
  return (
    <div>
      <Header />
      <Conduct />
      <Reviews />
      <Happens />
      <Features />
      <div data-aos="fade-down">
        <SecuritySection />
      </div>
      <ReviewSlider />
      <Client />
    </div>
  );
};

export default Home;
