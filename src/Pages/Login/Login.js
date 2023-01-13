import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Please Login Here</h1>
        </div>
        <div className="card  w-full shadow-2xl bg-base-100 mt-0 py-2">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-0">
              <button className="btn border-none bg-emerald-400 hover:bg-emerald-600">Login</button>
            </div>
            <p className="text-center">Or</p>
            <button className="btn btn-outline btn-primary"><FcGoogle /> <span className="ml-2">Sign up with Google</span> </button>
          </form>
          <p className="text-center">
            New in Kalender?
            <Link to="/register" className="text-blue-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
