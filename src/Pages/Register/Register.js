import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { usePostUserMutation } from "../../app/api/usersSlice";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [postUser, { isLoading }] = usePostUserMutation();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        postUser({ name, email });
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        postUser({ name: user.displayName, email: user.email })
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            Please Register Here
          </h1>
        </div>
        <div className="card  w-full  shadow-2xl bg-base-100 mt-0 pb-6">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your email"
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
                placeholder="your password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn border-none bg-emerald-400 hover:bg-emerald-600">
                Register
              </button>
            </div>
            <p className="text-center">Or</p>
            <button className="btn btn-outline btn-primary"><FcGoogle /> <span className="ml-2">Sign up with Google</span> </button>
          </form>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
