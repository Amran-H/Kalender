import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row w-4/5 mx-auto text-left mt-10">
      <div className="w-full lg:w-2/5">
        <div className="w-full lg:w-4/5">
          <h1 className="text-5xl font-bold text-cyan-900">
            Easy <br />
            <span className="text-cyan-500"> ahead </span>
          </h1>
          <p className="text-base lg:text-xl my-10 text-gray-500">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
        </div>
        <div className="w-full hidden lg:flex flex-col my-10">
          <select className="select select-bordered w-full max-w-xs text-xl">
            <option disabled selected value="English">
              English
            </option>
            <option value="Français">Français</option>
            <option value="Español">Español</option>
            <option value="Deutsch">Deutsch</option>
            <option value="Português">Português</option>
          </select>
          <div className="mt-14">
            <button className="btn w-36 mr-3">Apple Store</button>
            <button className="btn w-36">Google Play</button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-base w-full lg:w-3/5">
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">About</h3>
          <li className="my-5">
            <a href="/#">About Calendly</a>
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
            <a href="#">Embed Calendly</a>
          </li>
          <li className="my-5">
            <a href="#">Availability</a>
          </li>
          <li className="my-5">
            <a href="#">Sending Notifications</a>
          </li>
          <li className="my-5">
            <a href="#">Using Calendly</a>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">Support</h3>
          <li className="my-5">
            <a href="#">Help Center</a>
          </li>
          <li className="my-5">
            <a href="#">Vedio Tutorials</a>
          </li>
          <li className="my-5">
            <a href="#">Cookie Setting</a>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">Add-Ons</h3>
          <li className="my-5">
            <a href="#">Download for Chrome</a>
          </li>
          <li className="my-5">
            <a href="#">Download for Firefox</a>
          </li>
        </div>
        <div className="list-none">
          <h3 className="my-6 text-xl font-bold text-black">Add-Ons</h3>
          <li className="my-5">
            <a href="#">Developer Tools</a>
          </li>
        </div>
      </div>
      <div className="w-full flex flex-col lg:hidden my-10">
        <select className="select select-bordered w-full max-w-xs text-xl">
          <option disabled selected value="English">
            English
          </option>
          <option value="Français">Français</option>
          <option value="Español">Español</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Português">Português</option>
        </select>
        <div className="mt-14">
          <button className="btn w-36 mr-3">Apple Store</button>
          <button className="btn w-36">Google Play</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
