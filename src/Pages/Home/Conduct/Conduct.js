import React, { useState } from "react";
import "animate.css";
import Button from "../../../Components/Button/Button";

const Conduct = () => {
  const [item, setItem] = useState(1);
  return (
    <section className="mx-5 lg:w-4/5 lg:mx-auto mt-10">
      <div className=" text-base  lg:text-xl font-bold ">
        <div className="flex flex-col lg:flex-row justify-between text-xl font-bold">
          <button
            onClick={() => setItem(1)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 1
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            Pediatrics
          </button>
          <button
            onClick={() => setItem(2)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 2
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            Hematology
          </button>
          <button
            onClick={() => setItem(3)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 3
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            MRI
          </button>
          <button
            onClick={() => setItem(4)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 4
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            X-Ray Diagnostics
          </button>
        </div>
        {/* Card section */}
        <div>
          <div>
            {item === 1 && (
              <div className="flex flex-col lg:flex-row  items-center mt-10 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]">
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold ">Pediatrics</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Book high-value meetings in seconds and turn scheduling
                      into a competitive advantage.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Speed up your sales cycle
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Keep your deal momentum high and remove scheduling
                      friction at every stage of your sales cycle.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Close more deals</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Customize reminder and follow-up workflows to move deals
                      along, integrate with sales tools, and remove logistical
                      tasks to focus on selling.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]"
                    src="https://images.unsplash.com/photo-1671726805768-575f88de945a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {item === 2 && (
              <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]">
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Drive more retention</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Bring all of your experts together and connect with
                      customers at every stage of their journey to build
                      long-lasting partnerships.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Speed up your response times
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Quickly book time to solve customers’ needs and help them
                      self-serve to support their goals.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Improve NPS and customer health
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Change the way you schedule meetings to increase customer
                      satisfaction and keep engagement high with reminder and
                      follow-up workflows.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]"
                    src="https://images.unsplash.com/photo-1673543546762-c89d17efe580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {item === 3 && (
              <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]">
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Hire more efficiently</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Spend less time wrangling calendars and more time meeting
                      candidates.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Speed up your recruiting cycle
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Book interviews in seconds and reduce time-to-fill.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Improve the candidate experience
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Eliminate friction and make your recruiting process a
                      competitive advantage.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]"
                    src="https://images.unsplash.com/photo-1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {item === 4 && (
              <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]">
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Maintain enterprise-grade security with scheduling
                      automation
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Stay aligned with your security requirements and reduce
                      risk across the org.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Implement and govern at ease
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Eliminate the manual processes of implementing, managing
                      user access and permissions on the platform.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Drive adoption and ROI across teams
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Partner with our team to onboard, drive adoption, and
                      identify success metrics to achieve greater value, faster.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]"
                    src="https://images.unsplash.com/photo-1673537226602-3d8ac6bc8dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conduct;
