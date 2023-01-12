import React from "react";
import Client from "../Client/Client";
import Conduct from "../Conduct/Conduct";
import Header from "../Header/Header";
import Integrations from "../Integrations/Integrations";
import SecuritySection from "../SecuritySection/SecuritySection";
import Happens from "./../Happens/Happens";

const Home = () => {
  return (
    <div>
      <Header />
      <Conduct />
      <Client />
      <Happens />
      <Integrations />
      <SecuritySection />
    </div>
  );
};

export default Home;
