import React from "react";
import { TiTick } from "react-icons/ti";

const SecuritySection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-slate-100 rounded-lg mx-2 md:p-16 p-5 my-20 md:mx-auto justify-center items-center">
      <img
        className="rounded-xl mb-5 w-full md:hidden md:w-full"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="lg:w-3/4">
        <h1 className="text-4xl mb-5 font-bold">
          Make your IT team feel secure and safe
        </h1>
        <div>
          <div className="mb-6">
            <h1 className="text-xl flex items-center font-bold">
              <TiTick></TiTick> Centralize billing
            </h1>
            <p className="text-lg">
              Hundreds of coworkers use Kalender – bring them all together in
              one secure, managed account.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-xl font-bold flex items-center">
              <TiTick></TiTick> Secure your Kalender usage
            </h1>
            <p className="text-lg">
              Single-sign-on, SCIM, and more make it easy to onboard/offboard
              users, mandate passwords, and more.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center">
              <TiTick></TiTick> Standardize how your teams use Kalender
            </h1>
            <p className="text-lg">
              Manage how your coworkers create meeting types, <br /> send
              consistent reminders, and adhere to brand standards.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="rounded-xl w-full md:block hidden md:w-full"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default SecuritySection;
