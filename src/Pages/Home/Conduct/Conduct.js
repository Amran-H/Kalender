import React, { useState } from "react";
import image1 from "../../../images/Calendly-Sales-Small-new.webp";
import "animate.css";

const Conduct = () => {
  const [item, setItem] = useState(1);
  return (
    <section className=" mt-10">
      <div className="flex justify-between text-xl font-bold border-b-4 border-gray-100 overflow-x-auto lg:overflow-hidden">
        <p
          onClick={() => setItem(1)}
          className={`px-10 ${item === 1 ? "border-b-4 border-cyan-400 pb-10" : ""
            }`}
        >
          Sales
        </p>
        <p
          onClick={() => setItem(2)}
          className={`px-10 ${item === 2 ? "border-b-4 border-cyan-400 pb-10" : ""
            }`}
        >
          Marketing
        </p>
        <p
          onClick={() => setItem(3)}
          className={`px-10 ${item === 3 ? "border-b-4 border-cyan-400 pb-10" : ""
            }`}
        >
          Customer Success
        </p>
        <p
          onClick={() => setItem(4)}
          className={`px-10 ${item === 4 ? "border-b-4 border-cyan-400 pb-10" : ""
            }`}
        >
          Recruiting
        </p>
        <p
          onClick={() => setItem(5)}
          className={`px-10 ${item === 5 ? "border-b-4 border-cyan-400 pb-10" : ""
            }`}
        >
          Information Technology
        </p>
        <p
          onClick={() => setItem(6)}
          className={`px-10 ${item === 6 ? "border-b-4 border-cyan-400 pb-10" : ""
            }`}
        >
          Education
        </p>
      </div>
      {/* Card section */}
      <div>
        <div>
          {item === 1 && (
            <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 mx-6 lg:border-none lg:pb-0 animate__animated animate__bounceInRight">
              <div className="text-left p-10 lg:w-1/2">
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">Drive more revenue</h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Book high-value meetings in seconds and turn scheduling into
                    a competitive advantage.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Speed up your sales cycle
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Keep your deal momentum high and remove scheduling friction
                    at every stage of your sales cycle.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">Close more deals</h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Customize reminder and follow-up workflows to move deals
                    along, integrate with sales tools, and remove logistical
                    tasks to focus on selling.
                  </p>
                </div>
                <button className="btn-link text-xl decoration-neutral-content font-semibold">
                  Learn more
                </button>
              </div>
              <div className="px-10 lg:w-1/2">
                <img src={image1} alt="" />
              </div>
            </div>
          )}
        </div>
        <div>
          {item === 2 && (
            <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 mx-6 lg:border-none lg:pb-0 animate__animated animate__bounceInRight">
              <div className="text-left p-10 lg:w-1/2">
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">Drive more retention</h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Bring all of your experts together and connect with
                    customers at every stage of their journey to build
                    long-lasting partnerships.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Speed up your response times
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Quickly book time to solve customers’ needs and help them
                    self-serve to support their goals.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Improve NPS and customer health
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Change the way you schedule meetings to increase customer
                    satisfaction and keep engagement high with reminder and
                    follow-up workflows.
                  </p>
                </div>
                <button className="btn-link text-xl decoration-neutral-content font-semibold">
                  Learn more
                </button>
              </div>
              <div className="px-10 lg:w-1/2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/6MaOVZrhlUGMwh5xszyWl8/2aaeec70d4e44490f150e28ea21d3165/Calendly-Demand-Gen-Small.png?w=1141&h=937&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div>
          {item === 3 && (
            <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 mx-6 lg:border-none lg:pb-0 animate__animated animate__bounceInRight">
              <div className="text-left p-10 lg:w-1/2">
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">Hire more efficiently</h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Spend less time wrangling calendars and more time meeting
                    candidates.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Speed up your recruiting cycle
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Book interviews in seconds and reduce time-to-fill.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Improve the candidate experience
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Eliminate friction and make your recruiting process a
                    competitive advantage.
                  </p>
                </div>
                <button className="btn-link text-xl decoration-neutral-content font-semibold">
                  Learn more
                </button>
              </div>
              <div className="px-10 lg:w-1/2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/47xznwNRRuHE6gx1VSbhee/2f9ad09c15c55a4a252239f2e915c459/Calendly-Customer-Success.png?w=1141&h=939&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div>
          {item === 4 && (
            <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 mx-6 lg:border-none lg:pb-0 animate__animated animate__bounceInRight">
              <div className="text-left p-10 lg:w-1/2">
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Maintain enterprise-grade security with scheduling
                    automation
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Stay aligned with your security requirements and reduce risk
                    across the org.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Implement and govern at ease
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Eliminate the manual processes of implementing, managing
                    user access and permissions on the platform.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Drive adoption and ROI across teams
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Partner with our team to onboard, drive adoption, and
                    identify success metrics to achieve greater value, faster.
                  </p>
                </div>
                <button className="btn-link text-xl decoration-neutral-content font-semibold">
                  Learn more
                </button>
              </div>
              <div className="px-10 lg:w-1/2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/1kDKK7sXKlgYglms0bWvmh/832a633866ff496a90261876f026d5fd/Calendly-Recruiting-Small.png?w=1140&h=930&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div>
          {item === 5 && (
            <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 mx-6 lg:border-none lg:pb-0 animate__animated animate__bounceInRight">
              <div className="text-left p-10 lg:w-1/2 ">
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Drive more valuable connections with automated scheduling
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Spend more quality time supporting students, whether you’re
                    advising, tutoring, career planning, or counseling.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Increase communication and foster coordination
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Make your schedule more accessible to students and
                    prospects, allowing them to book time when they need it
                    most.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Deliver a better educational experience
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Focus on what matters most: supporting and connecting with
                    your students, so they can succeed.
                  </p>
                </div>
                <button className="btn-link text-xl decoration-neutral-content font-semibold">
                  Learn more
                </button>
              </div>
              <div className="px-10 lg:w-1/2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/2Vw1fqn2KMdFMULRX84jgx/bcee83879a5d189867d98689b0088d0d/Calendly-IT_Small__3.png?w=1920&h=1578&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div>
          {item === 6 && (
            <div className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 mx-6 lg:border-none lg:pb-0 animate__animated animate__bounceInRight">
              <div className="text-left p-10 lg:w-1/2">
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">Drive more revenue</h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Book high-value meetings in seconds and turn scheduling into
                    a competitive advantage.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">
                    Speed up your sales cycle
                  </h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Keep your deal momentum high and remove scheduling friction
                    at every stage of your sales cycle.
                  </p>
                </div>
                <div className="lg:w-5/6">
                  <h3 className="text-xl font-bold">Close more deals</h3>
                  <p className="text-lg text-gray-500 mt-1 mb-3">
                    Customize reminder and follow-up workflows to move deals
                    along, integrate with sales tools, and remove logistical
                    tasks to focus on selling.
                  </p>
                </div>
                <button className="btn-link text-xl decoration-neutral-content font-semibold">
                  Learn more
                </button>
              </div>
              <div className="px-10 lg:w-1/2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/1nFkpdx4ok8zrMu4ZCkIxV/2d9761a58b2d846458fa27797dc2ecee/Calendly-Education.png?w=1140&h=932&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Conduct;
