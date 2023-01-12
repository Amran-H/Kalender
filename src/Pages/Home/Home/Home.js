import React from "react";
import Conduct from "../Conduct/Conduct";
import Header from "../Header/Header";
import Integrations from "../Integrations/Integrations";
import Reviews from "../Reviews/Reviews";
import SecuritySection from "../SecuritySection/SecuritySection";
import Happens from "./../Happens/Happens";

const Home = () => {
  return (
    <div>
      <Header />
      <Conduct />
      <Reviews />
      <Happens />
      <Integrations />
      <SecuritySection />
    </div>
  );
};

export default Home;
