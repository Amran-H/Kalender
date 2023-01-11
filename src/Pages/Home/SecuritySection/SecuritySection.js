import React from "react";
import { TiTick } from "react-icons/ti";

const SecuritySection = () => {
  return (
    <div className="flex my-20 mx-auto justify-center items-center">
      <div>
        <img
          className="w-2/3"
          src="https://images.ctfassets.net/k0lk9kiuza3o/2L9MC4GQzvWk2uSZLbZO29/4d086ff64790b73fc82a63a49ffcf2b5/Calendly-Secure-IT.png?w=1140&h=930&q=50&fm=webp"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl mb-5 font-bold">
          Make your IT team feel secure and safe
        </h1>
        <div>
          <div>
            <h1 className="text-lg flex items-center font-semibold">
              <TiTick></TiTick> Centralize billing
            </h1>
            <p>
              Hundreds of coworkers use Calendly – bring them all together in
              one secure, managed account.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold flex items-center">
              <TiTick></TiTick> Secure your Calendly usage
            </h1>
            <p>
              Single-sign-on, SCIM, and more make it easy to onboard/offboard
              users, mandate passwords, and more.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold flex items-center">
              <TiTick></TiTick> Standardize how your teams use Calendly
            </h1>
            <p>
              Manage how your coworkers create meeting types, send consistent
              reminders, and adhere to brand standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
