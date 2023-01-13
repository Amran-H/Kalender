import React from "react";
import img from "../../../images/review.jpg";
import { FaArrowRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="hero bg-[#f7faff]">
      <div className="hero-content md:h-screen flex-col lg:flex-row">
        <div className="md:w-1/2 grid place-content-center">
          <img
            src={img}
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
            className="h-[300px] w-[300px] shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">
            Kalendar is one of the best scheduling app ever crossed my path.
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            maiores tenetur incidunt labore at tempore recusandae. Minus tempora
            dicta maiores?
          </p>
          <p className="text-black flex items-center gap-3 text-xl p-0">
            Read More <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
