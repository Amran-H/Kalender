import React from "react";
import image from "../../../assets/images/Integrations-Calendly__1_.webp";

const Integrations = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[620px] bg-gray-100 px-10 mx-5">
      <div className="text-left lg:w-2/5">
        <img
          className="rounded-xl w-full md:hidden md:w-full"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <h1 className="text-5xl font-bold text-cyan-900 lg:mb-14 my-8">
          Integrations and <br /> Extensions
        </h1>
        <p className="text-xl text-gray-500 mb-8 lg:mb-14">
          Boost productivity with integrations that fold right into your
          workflow.
        </p>
        <button className="bg-emerald-500 border-none px-5 py-3 text-xl font-bold text-white hover:bg-emerald-700 rounded-lg mb-10">
          Explore integrations
        </button>
      </div>
      <div className="lg:w-3/5 ">
        <img
          className="rounded-xl w-full md:block hidden md:w-full"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Integrations;
