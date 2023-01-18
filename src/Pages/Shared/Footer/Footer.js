import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row text-left my-10 mx-5 ">
      <div className="w-full lg:w-2/5 lg:pt-10">
        <div className="w-full lg:w-4/5">
          <h1 className="text-5xl font-bold text-cyan-900">Kelender</h1>
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
            <a href="/#">About Kalender</a>
          </li>
          <li className="my-5">
            <a href="/#">Contact Us</a>
          </li>
          <li className="my-5">
            <a href="/#">Newsroom</a>
          </li>
          <li className="my-5">
            <a href="/#">Careers</a>
          </li>

          <li className="my-5">
            <a href="/#">Security</a>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">Solutions</h3>
          <li className="my-5">
            <a href="#">Customer Success</a>
          </li>
          <li className="my-5">
            <a href="#">Sales</a>
          </li>
          <li className="my-5">
            <a href="#">Recruiting</a>
          </li>
          <li className="my-5">
            <a href="#">Information Technology</a>
          </li>
          <li className="my-5">
            <a href="#">Marketing</a>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">
            Popular Features
          </h3>
          <li className="my-5">
            <a href="#">Embed Kalender</a>
          </li>
          <li className="my-5">
            <a href="#">Availability</a>
          </li>
          <li className="my-5">
            <a href="#">Sending Notifications</a>
          </li>
          <li className="my-5">
            <a href="#">Using Kalender</a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Footer;
