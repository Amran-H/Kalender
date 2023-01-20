import React from "react";

const Review = () => {
  return (
    <div className="hero my-14">
      <div className="card flex-shrink-0 w-full max-w-sm  bg-base-200">
        <h1 className="text-3xl my-10 font-bold text-center text-emerald-400">
          Your Feedback
        </h1>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
