import React from "react";

const ScheduleItem = ({ card }) => {
  const { img, icon, name, body, list1, list2, list3 } = card;
  return (
    <div
      className="flex flex-col-reverse  lg:flex-row items-center justify-between text-base mb-8 md:border-none lg:border-none 
    border-solid border-2 border-gray-300 p-8 lg:p-0 md:p-0"
    >
      <img className="h-96 bg-sky-50 lg:mr-8" src={img} alt="" />
      <div className="mb-5 lg:mb-0 md:mb-0 text-justify">
        <h2 className="text-3xl">{name}</h2>
        <p className="my-5">{body}</p>
        <div>
          <div className="flex items-center">
            <img className="pt-4 " src={icon} alt="" />
            <p className="ml-3 mt-5">{list1}</p>
          </div>
          <div className="flex items-center">
            <img className="pt-4 " src={icon} alt="" />
            <p className="ml-3 mt-5">{list2}</p>
          </div>
          <div className="flex items-center">
            <img className="pt-4 " src={icon} alt="" />
            <p className="ml-3 mt-5">{list3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
