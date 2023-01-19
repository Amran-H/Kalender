import React from "react";

const Integrations = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://assets.setmore.com/website/v2/images/integration-root/images/integrate-apps.webp"
            className=" rounded-lg"
            alt="banner img"
          />
          <div>
            <h1 className="text-6xl font-bold">Integrate your favorite apps</h1>
            <p className="py-6 text-xl">
              Kalender is just the beginning of a memorable customer experience.
              To create connections that last, personalize how you engage with
              your audience and vice versa. <br></br> <br></br> Using Kalender’s
              integrations, you can automate daily processes, focus on sharing
              your skills and keep customers coming back.
            </p>
            <button className="btn border-none bg-emerald-400 hover:bg-emerald-600">
              Get Started for free
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Integration section */}
      <div className="py-6">
        <h2 className="py-6 text-5xl font-bold text-center">Social media integrations.</h2>
        <p className="text-xl text-center pb-6 ">Make it simple for your followers to book their appointments, without leaving their social apps.</p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Facebook</h2>
              <p>Get booked directly from your Facebook business profile.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                alt="instagram"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Instagram</h2>
              <p>Encourage new booking by streaming your feed on your Booking Page.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                alt="instagram"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Instagram Booking</h2>
              <p>Let customer book appointment from your latest posts on Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
