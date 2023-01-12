import React from "react";
import image from "../../../images/Integrations-Calendly__1_.webp";

const Integrations = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[620px] bg-gray-100 px-10">
      <div className="text-left lg:w-2/5">
        <h1 className="text-5xl font-bold text-cyan-900 lg:mb-14 my-8">
          Integrations and <br /> Extensions
        </h1>
        <p className="text-xl text-gray-500 mb-8 lg:mb-14">
          Boost productivity with integrations that fold right into your
          workflow.
        </p>
        <button className="bg-sky-600 border-none px-5 py-3 text-xl font-bold text-white hover:bg-sky-700 rounded-lg mb-10">
          Explore integrations
        </button>
      </div>
      <div className="lg:w-3/5 ">
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Integrations;
