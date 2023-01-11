import React from "react";
import Conduct from "../Conduct/Conduct";
import Integrations from "../Integrations/Integrations";
import Reviews from "../Reviews/Reviews";
import Happens from "./../Happens/Happens";

const Home = () => {
  return (
    <div>
      <Conduct />
      <Reviews />
      <Happens />
      <Integrations />
    </div>
  );
};

export default Home;
