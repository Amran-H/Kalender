import React, { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="my-14">
      <h1 className="text-5xl text-cyan-900 text-center font-bold mb-10">
        Our Features
      </h1>
      <div className="grid gap-8 grid-cols-3">
        {features.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
