import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const Individuals = () => {
  const [value, onChange] = useState(new Date());

  const date = format(value, "PP");

  const handleBooking = (data) => {
    data.preventDefault();
    const form = data.target;
    const time = form.select.value;
    const email = form.email.value;
    const booking = {
      date,
      time,
      email,
    };
    console.log(booking);
  };

  return (
    <div className="mt-14">
      <h1 className="text-3xl text-center font-bold">Individuals Schedule</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14
        bg-base-100 py-10"
      >
        <div className="md:ml-10 lg:ml-20 lg:w-full md:w-full w-3/4 mx-auto">
          <Calendar onChange={onChange} value={value} />
        </div>
        <form
          onSubmit={handleBooking}
          className="md:ml-10 lg:ml-20 lg:w-full
         md:w-full w-3/4 mx-auto"
        >
          <div className="form-control w-full max-w-xs my-5">
            <select name="select" className="select select-bordered ">
              <option disabled selected>
                Select Your Meeting Time
              </option>
              <option value="10am - 11:00am">10am - 11:00am</option>
              <option value="11am - 12:00am">11am - 12:00am</option>
              <option value="12am - 01:00am">12am - 01:00am</option>
              <option value="01am - 02:00am">01am - 02:00am</option>
              <option value="02am - 03:00am">02am - 03:00am</option>
              <option value="03am - 04:00am">03am - 04:00am</option>
              <option value="04am - 05:00am">04am - 05:00am</option>
            </select>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Meeting Partner Email"
              className="input input-bordered w-full max-w-xs my-5"
            />
          </div>
          <div className="btn text-xl border-none w-full max-w-xs my-5 bg-emerald-400 hover:bg-emerald-600">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
  return (
    <div className=''>
      Individuals Page
    </div>
  );
};

export default Individuals;
