import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    // toast.success("Logout successfull");
    navigate("/")
  }
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/individuals">Individuals</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>

            <li>
              <Link to="/pricing">Pricing</Link>
            </li>

            <li>
              <Link to="integrations">Integrations</Link>
            </li>
            {
              user?.uid ?
                <div>
                  <li>
                    <Link to="/mySchedule">My schedule</Link>
                  </li>

                </div>
                :
                <div className="hidden">
                  <li>
                    <Link to="/mySchedule">My schedule</Link>
                  </li>

                </div>

            }
          </ul>
        </div>
        <Link to="/" className="text-emerald-400 font-bold normal-case md:text-4xl text-xl">
          Kalender
        </Link>
      </div>

      {/* Big Screen */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-emerald-600">
            <Link to="/individuals">Individuals</Link>
          </li>
          <li className=" hover:text-emerald-600">
            <Link to="/teams">Teams</Link>
          </li>

          <li className=" hover:text-emerald-600">
            <Link to="/pricing">Pricing</Link>
          </li>

          <li className=" hover:text-emerald-600">
            <Link to="/integrations">Integrations</Link>
          </li>

          {
            user?.uid ?
              <div>
                <li>
                  <Link to="/mySchedule">My schedule</Link>
                </li>

              </div>
              :
              <div className="hidden">
                <li>
                  <Link to="/mySchedule">My schedule</Link>
                </li>

              </div>

          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.uid ?
            <Link
              className="md:mr-4 mr-3 hover:text-emerald-600 font-bold"
              onClick={handleLogOut}
            >
              Log Out
            </Link>
            :
            <Link
              to="/login"
              className="md:mr-4 mr-3 hover:text-emerald-600 font-bold"
            >
              Log In
            </Link>
        }

        {
          user?.uid ?
            <div className="hidden">
              <Link to="/register" className="btn border-none bg-emerald-400 hover:bg-emerald-600">Get started</Link>

            </div>
            :
            <Link to="/register" className="btn border-none bg-emerald-400 hover:bg-emerald-600">Get started</Link>

        }

      </div>
    </div>
  );
};

export default Navbar;
