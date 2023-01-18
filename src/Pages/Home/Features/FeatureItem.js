import React from "react";

const FeatureItem = ({ feature }) => {
  const { icon, name, details } = feature;
  return (
    <div className="mt-10 w-5/6 mx-auto lg:w-auto bg-base-100 shadow-xl hover:shadow-2xl p-5 rounded-xl">
      <img className="my-3 mx-auto" src={icon} alt="" />
      <div>
        <h1>{name}</h1>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
