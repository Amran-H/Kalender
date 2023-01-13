import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Please Register Here</h1>
          </div>
          <div className="card  w-full  shadow-2xl bg-base-100 mt-0 py-2">
            <form className="card-body">
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
                <button className="btn btn-primary">
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