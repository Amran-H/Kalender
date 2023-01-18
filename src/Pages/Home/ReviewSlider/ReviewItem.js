import React from "react";

const ReviewItem = ({ comment }) => {
  const { name, body } = comment;
  return (
    <div className="card bg-base-100 shadow-xl mx-auto lg:mx-5 mb-8 lg:h-96 h-[500px] w-5/6 lg:w-auto pt-4 text-center">
      <img
        className="w-20 h-20 mx-auto rounded-full "
        src="https://placeimg.com/400/225/arch"
        alt="Shoes"
      />
      <div className="card-body">
        <h1 className="text-xl">{name}</h1>
        <p className="text-justify">
          {body.length > 100 ? body.split(80) + "...." : body}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
