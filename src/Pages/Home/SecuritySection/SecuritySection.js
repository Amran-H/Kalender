import React from "react";
import { TiTick } from "react-icons/ti";

const SecuritySection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  mx-5 my-20 md:mx-auto justify-center items-center">
      {/* <div>
        <img
          className="lg:w-2/3"
          src="https://images.ctfassets.net/k0lk9kiuza3o/2L9MC4GQzvWk2uSZLbZO29/4d086ff64790b73fc82a63a49ffcf2b5/Calendly-Secure-IT.png?w=1140&h=930&q=50&fm=webp"
          alt=""
        />
      </div> */}
      <div className="lg:w-3/4">
        <h1 className="text-4xl mb-5 font-bold">
          Make your IT team feel secure and safe
        </h1>
        <div>
          <div className="mb-6">
            <h1 className="text-xl flex items-center font-bold">
              <TiTick></TiTick> Centralize billing
            </h1>
            <p className="text-lg">
              Hundreds of coworkers use Calendly – bring them all together in
              one secure, managed account.
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-xl font-bold flex items-center">
              <TiTick></TiTick> Secure your Calendly usage
            </h1>
            <p className="text-lg">
              Single-sign-on, SCIM, and more make it easy to onboard/offboard
              users, mandate passwords, and more.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center">
              <TiTick></TiTick> Standardize how your teams use Calendly
            </h1>
            <p className="text-lg">
              Manage how your coworkers create meeting types, <br /> send consistent
              reminders, and adhere to brand standards.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="lg:w-"
          src="https://images.ctfassets.net/k0lk9kiuza3o/2L9MC4GQzvWk2uSZLbZO29/4d086ff64790b73fc82a63a49ffcf2b5/Calendly-Secure-IT.png?w=1140&h=930&q=50&fm=webp"
          alt=""
        />
      </div>

    </div>
  );
};

export default SecuritySection;
