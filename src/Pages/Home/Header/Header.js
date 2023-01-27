import React from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <img
                className="object-cover md:hidden w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
              />
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-cyan-900 sm:text-4xl sm:leading-none">
                Book Your Schedule
                <br className="hidden md:block" />
                With in 2 Minute
                <span className="inline-block text-deep-purple-accent-400">
                  and Save Your Time
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Here you can make your Schedule very quickly which will save you
                a lot of time.Within two minutes you can create a table for any
                Schedule for your company meeting And what's the delay, book the
                first Schedule for your company
              </p>
            </div>

            <div className="flex flex-col items-center md:flex-row">
              <Link to="/individuals">
                <span className="hover:bg-emerald-600 cursor-pointer inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline bg-emerald-400 focus:outline-none text-white">
                  Make Your Schedule
                  <p className="text-2xl mx-2">
                    <TfiAlarmClock></TfiAlarmClock>
                  </p>
                </span>
              </Link>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover md:block hidden w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
