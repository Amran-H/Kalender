import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row text-left my-10 mx-5 ">
      <div className="w-full lg:w-2/5 lg:pt-10">
        <div className="w-full lg:w-4/5">
          <h1 className="text-5xl font-bold text-emerald-400">Kalender</h1>
          <p className="text-base lg:text-xl my-10 text-gray-500">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-base w-full lg:w-3/5">
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">About</h3>

          <li className="my-5">
            <Link to="/">Contact Us</Link>
          </li>
          <li className="my-5">
            <Link to="/review">Review</Link>
          </li>
          <li className="my-5">
            <Link to="/pricing">Pricing</Link>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">Services</h3>

          <li className="my-5">
            <Link to="/mySchedule">My Schedule</Link>
          </li>
          <li className="my-5">
            <Link to="/individuals">Individuals</Link>
          </li>
          <li className="my-5">
            <Link to="/teams">Teams</Link>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">
            Popular Features
          </h3>
          <li className="my-5">
            <Link to="/">Send Email</Link>
          </li>
          <li className="my-5">
            <Link to="/">Availability</Link>
          </li>
          <li className="my-5">
            <Link to="/">Sending Notifications</Link>
          </li>
          <li className="my-5">
            <Link to="/">Using Kalender</Link>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Footer;
