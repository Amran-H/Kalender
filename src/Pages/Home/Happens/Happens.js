import React, { useEffect, useState } from "react";
import image1 from "../../../images/Calendly-Demand-Gen-2__1_.webp";
import image2 from "../../../images/Calendly-Reminders-2.webp";
import image3 from "../../../images/Calendly-Route-Customers-Sales-team.webp";
import image4 from "../../../images/Calendly-Teams-Workflows__1_.webp";

const Happens = () => {
  const [imageChange, setImageChange] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageChange === 2) {
        setImageChange(3);
      } else if (imageChange === 3) {
        setImageChange(4);
      } else if (imageChange === 4) {
        setImageChange(1);
      } else {
        setImageChange(2);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [imageChange]);

  return (
    <section className="my-10">
      <h1 className="text-4xl px-10 text-center lg:text-4xl text-cyan-900 font-bold  lg:w-3/5 mx-auto">
        Scheduling automation happens before and after meetings
      </h1>
      <div className="hidden lg:flex text-left mt-20 mb-10">
        <div className="w-4/6">
          <div>
            {imageChange === 1 && (
              <img className="h-[600px] p-8" src={image1} alt="" srcset="" />
            )}
          </div>
          <div>
            {imageChange === 2 && (
              <img className="h-[600px] p-8" src={image2} alt="" srcset="" />
            )}
          </div>
          <div>
            {imageChange === 3 && (
              <img className="h-[600px] p-8" src={image3} alt="" srcset="" />
            )}
          </div>
          <div>
            {imageChange === 4 && (
              <img className="h-[600px] p-8" src={image4} alt="" srcset="" />
            )}
          </div>
        </div>

        <div className="w-2/6 border-l-4 border-indigo-600">
          <button
            onClick={() => setImageChange(1)}
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
              imageChange === 1 ? "text-cyan-900" : "text-gray-400"
            }`}
          >
            Let People schedule meeting on your website
          </button>
          <button
            onClick={() => setImageChange(2)}
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
              imageChange === 2 ? "text-cyan-900" : "text-gray-400"
            }`}
          >
            Screen people before they can book with you
          </button>
          <button
            onClick={() => setImageChange(3)}
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
              imageChange === 3 ? "text-cyan-900" : "text-gray-400"
            }`}
          >
            Make people reconfirm meeting with you
          </button>
          <button
            onClick={() => setImageChange(4)}
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
              imageChange === 4 ? "text-cyan-900" : "text-gray-400"
            }`}
          >
            Automatically move a deal along with helpful content
          </button>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="lg:hidden">
        <div>
          <button
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 text-cyan-900`}
          >
            Let People schedule meeting on your website
          </button>
          <img className=" p-8" src={image1} alt="" srcset="" />
        </div>
        <div>
          <button
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 text-cyan-900`}
          >
            Screen people before they can book with you
          </button>
          <img className=" p-8" src={image2} alt="" srcset="" />
        </div>
        <div>
          <button
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 text-cyan-900`}
          >
            Automatically move a deal along with helpful content
          </button>
          <img className=" p-8" src={image3} alt="" srcset="" />
        </div>
        <div>
          <button
            className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 text-cyan-900`}
          >
            Make people reconfirm meeting with you
          </button>
          <img className=" p-8" src={image4} alt="" srcset="" />
        </div>
      </div>
    </section>
  );
};

export default Happens;
