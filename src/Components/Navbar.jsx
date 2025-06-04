import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user} = use(AuthContext);
  console.log(user);
  
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/marathon">Marathons</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            <Link to="/login" className="btn">
              Sign In
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">daisyUI</Link>
        {
          user? (user.email):""
        }
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">{links}</ul>
        <Link to="/login" className="btn">
          Sign In
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
