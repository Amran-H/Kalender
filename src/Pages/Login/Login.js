import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../contexts/AuthProvider";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setPasswordError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setPasswordError(err.message);
      });
  };

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Please Login Here</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-6">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {success && (
              <p className="text-green-500">
                Successfully login to the account
              </p>
            )}

            {passwordError && (
              <p className="text-red-500">Wrong password or email</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-outline border-none bg-emerald-400 hover:bg-emerald-600 text-white">Login</button>
            </div>
            <p className="text-center font-semibold">Or</p>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline border-none bg-emerald-400 hover:bg-emerald-600 text-white"
            >
              <FcGoogle /> <span className="ml-2">Sign up with Google</span>{" "}
            </button>
          </form>
          <p className="text-center">
            New in Kalender?
            <Link to="/register" className="text-emerald-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
