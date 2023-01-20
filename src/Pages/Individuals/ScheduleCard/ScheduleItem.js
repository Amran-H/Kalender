import React from "react";

const ScheduleItem = ({ card }) => {
  const { _id, img, icon, name, body, list1, list2, list3 } = card;
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between text-base">
      <img className="h-96 " src={img} alt="" />
      <div>
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
