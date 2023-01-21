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
        <h2 className="py-6 text-5xl font-bold text-center">
          Social media integrations.
        </h2>
        <p className="text-xl text-center pb-6 ">
          Make it simple for your followers to book their appointments, <br />
          without leaving their social apps.
        </p>
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
              <p>
                Encourage new booking by streaming your feed on your Booking
                Page.
              </p>
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
              <p>
                Let customer book appointment from your latest posts on
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Integration section */}
      <div className="py-6">
        <h2 className="py-6 text-5xl font-bold text-center">
          Payment integrations.
        </h2>
        <p className="text-xl text-center pb-6 ">
          Accept secure online payments in advance, for any of your services.
          <br /> Less invoicing, more convenience 🏆
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://www.clipartmax.com/png/middle/334-3341544_black-square-logo-square-point-of-sale-logo.png"
                alt="square"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Square</h2>
              <p>Get paid for your services from Anywhere, with Square.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/stripe-2-498440.png"
                alt="stripe"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Stripe</h2>
              <p>Collect debit or credit card payments on booking, easily.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://w7.pngwing.com/pngs/246/916/png-transparent-computer-icons-logo-paypal-encapsulated-postscript-paypal-blue-angle-logo.png"
                alt="PayPal"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">PayPal</h2>
              <p>
                Let your customers pay online via their PayPal wallet and more.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://play-lh.googleusercontent.com/-q0qVWw6suw-ce_Z7W0tCpT46r2Pg7XOA-lVkukYYXBmwm0gtT8_iylmzU5kn66f_A=w240-h480-rw"
                alt="LawPay"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">LawPay</h2>
              <p>
                Enable leads and clients to pay in advance through your Booking
                Page.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar sync integrations section */}
      <div className="py-6">
        <h2 className="py-6 text-5xl font-bold text-center">
          Calendar sync integrations.
        </h2>
        <p className="text-xl text-center pb-6 ">
          Double-booking is a thing of the past. Sync your personal and <br />
          professional calendars for smooth scheduling around-the-clock.
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Google_Calendar_icon_%282015-2020%29.svg/1200px-Google_Calendar_icon_%282015-2020%29.svg.png"
                alt="Google Calendar"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Google Calendar</h2>
              <p>Sync calendar events between Google and Kalender.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/office-365-icon.png"
                alt="Office365 Calendar"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Office365 Calendar</h2>
              <p>Align events on your Office365 and Kalender calendars.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                alt="search"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Looking for another integration?</h2>
              <p className="text-emerald-600 font-bold">Send us a request</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video meeting integrations section */}
      <div className="py-6">
        <h2 className="py-6 text-5xl font-bold text-center">
          Video meeting integrations.
        </h2>
        <p className="text-xl text-center pb-6 ">
          Meet with your customers in a click. Attach video call links in your
          <br /> appointment confirmations and offer your services globally.
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://blog.logomyway.com/wp-content/uploads/2021/08/zoom-icon.png"
                alt="zoom"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Zoom</h2>
              <p>
                Host 1:1 consultations and group classes online, from Anywhere.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/934px-Google_Meet_icon_%282020%29.svg.png"
                alt="meet"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Google Meet</h2>
              <p>
                Reach a wider audience with Google Meet appointments - no travel
                required.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://play-lh.googleusercontent.com/GtdknKYiIvm_ubiNgbK-CrwCIqM4j624e2iOYHMbwm-lF8Hm0ymdd98NqeIpgtBADZo"
                alt="Teleport.video"
                className="rounded-xl w-12"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Teleport.video</h2>
              <p>
                Add download-free 1-click video meetings to your appointments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form section */}
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-center md:text-5xl font-bold py-6">
                What’s missing?
              </h1>
              <p className="text-xl text-center pb-6 ">
                If you can’t spot a platform that’s crucial to your business,
                send us a request
                <br /> and we’ll work hard to make an integration happen.
              </p>
            </div>
            <div className="card  w-full  shadow-2xl bg-base-100 mt-0 pb-6">
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <br />
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <br />
                <div className="form-control">
                  <input
                    type="text"
                    name="suggestion"
                    placeholder="Integration suggestion"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-outline border-none bg-emerald-400 hover:bg-emerald-600 text-white">
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
