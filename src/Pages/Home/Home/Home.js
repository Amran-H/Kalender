import React from "react";
import Client from "../Client/Client";
import Conduct from "../Conduct/Conduct";
import Header from "../Header/Header";
import Integrations from "../Integrations/Integrations";
import Newsteler from "../Newsteler/Newsteler";
import Reviews from "../Reviews/Reviews";
import SecuritySection from "../SecuritySection/SecuritySection";
import Happens from "./../Happens/Happens";

const Home = () => {
  return (
    <div>
      <Header />
      <Conduct />
      <Reviews />
      <Client />
      <Happens />
      <Integrations />
      <SecuritySection />
      <Newsteler></Newsteler>
    </div>
  );
};

export default Home;
