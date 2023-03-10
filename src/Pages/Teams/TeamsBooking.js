import React, { useContext, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const TeamsBooking = () => {
  const [selected, setSelected] = useState(new Date());
  const [email, setEmail] = useState([]);
  const { user } = useContext(AuthContext);

  const date = format(selected, "PP");

  console.log("sharif", email);

  const handleBooking = (data, i) => {
    data.preventDefault();
    const hostEmail = user?.email;
    const form = data.target;
    const time = form.select.value;
    const teamCategory = form.teamCategory.value;
    const meetingDescription = form.meetingDescription.value;

    const booking = {
      hostEmail,
      date,
      time,
      email,
      teamCategory,
      meetingDescription,
    };

    fetch("http://localhost:5000/multi-schedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => {
        res.json();
        console.log(res);
        data.target.reset();
        toast.success("Your contact has been sent successfully");
      })
      .catch((err) => toast.error("This schedule is error", err));
  };

  const handleManyEmail = () => {
    const emailCount = [...email, []];
    setEmail(emailCount);
    console.log(emailCount);
  };

  const handleEmail = (data, i) => {
    const inputData = [...email];
    inputData[i] = data.target.value;
    setEmail(inputData);
  };

  const handleDelete = (i) => {
    const deleteEmail = [...email];
    deleteEmail.splice(i, 1);
    setEmail(deleteEmail);
  };

  return (
    <div className="mt-14 ">
      <h1 className="text-5xl text-center font-bold mb-10">Group sessions</h1>
      <p className=" lg:w-3/5 mx-auto text-center text-lg">
        Whether it’s two or two hundred attendees, Sprintful is ideal for
        enabling your clients to reserve a seat in your upcoming group sessions
        - online or offline, we got you covered.
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14
        bg-base-100 py-10"
      >
        <div className="md:ml-10 lg:ml-20 lg:w-full md:w-full w-3/4 mx-auto">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
        <form
          onSubmit={handleBooking}
          className="md:ml-10 lg:ml-20 lg:w-full
          md:w-full w-3/4 mx-auto"
        >
          <h1 className="text-lg font-bold text-center text-emerald-600 mb-5">
            Meeting Schedule Time {date}
          </h1>
          <input
            required
            name="teamCategory"
            placeholder="Type Your Team Category"
            className="input input-bordered w-full max-w-xs my-5"
            type="text"
          />
          <br />
          <textarea
            className="textarea textarea-bordered w-full max-w-xs mb-5"
            name="meetingDescription"
            placeholder="Meeting Description"
            required
          ></textarea>

          <div className="form-control w-full max-w-xs mb-5">
            <select name="select" className="select select-bordered " required>
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
            <div>
              {email.map((data, i) => {
                return (
                  <div className="flex items-center mb-5">
                    <input
                      type="email"
                      name="email"
                      required
                      onBlur={(e) => handleEmail(e, i)}
                      placeholder="Enter Your Meeting Partner Email"
                      className="input input-bordered w-full max-w-xs  rounded-r-none"
                    />
                    <button
                      onClick={() => handleDelete(i)}
                      className="btn rounded-l-none"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {" "}
            <button
              onClick={handleManyEmail}
              className="btn text-base border-none w-full max-w-xs bg-emerald-400 hover:bg-emerald-600"
            >
              New Member Add
            </button>{" "}
          </div>

          <div className="btn text-xl border-none w-full max-w-xs my-5 bg-emerald-400 hover:bg-emerald-600">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamsBooking;
