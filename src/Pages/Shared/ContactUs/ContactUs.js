import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export const ContactUs = () => {
  const form = useRef();

  console.log("form", form.user_name);

  const sendEmail = (e) => {
    e.preventDefault();
    const formValue = e.target;
    const name = formValue.user_name.value;
    const email = formValue.user_email.value;
    const message = formValue.message.value;

    if (name && email && message) {
      emailjs
        .sendForm(
          "service_f980ovr",
          "template_gy8v3f9",
          form.current,
          "wmGnEyeMqRiSec54c"
        )
        .then(
          (result) => {
            console.log("message send");
            e.target.reset();
            toast.success("Your contact has been sent successfully");
          },
          (error) => {
            toast.error("Your contact is error");
          }
        );
    } else {
      alert("Fulfil all input section");
    }
  };

  return (
    <div className="my-14 bg-base-100">
      <h1 className="text-5xl text-center mb-10 pt-5 font-bold">Contact Us</h1>
      <div className="hero-content flex-col lg:flex-row-reverse justify-around">
        <div className="lg:w-1/2 w-11/12 mx-auto text-center">
          <img
            className="h-[450px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mWu5DiKWvhdDbnjnzdU-EB8POz-fYo344w&usqp=CAU"
            alt=""
          />
        </div>
        <div className="card lg:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form ref={form} onSubmit={sendEmail} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                type="Submit"
                value="Submit"
                className="btn bg-emerald-400 hover:bg-emerald-600 border-none text-xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
