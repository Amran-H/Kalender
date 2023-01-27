import React from "react";
import { ContactUs } from "../../Shared/ContactUs/ContactUs";
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
      <SecuritySection />
      <Client />
      <ReviewSlider />
      <ContactUs />
    </div>
  );
};

export default Home;
