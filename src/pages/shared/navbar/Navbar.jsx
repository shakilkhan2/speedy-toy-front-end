import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-sky-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>All Toys</a>
              </li>
              
              <li>
                <a>Add a Toy</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="cursor-pointer normal-case text-xl">
            SpeedyToy
          </Link>
          {/* nav for large screen */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li tabIndex={0}>
              <a>
                Category
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Sports Car</a>
                </li>
                <li>
                  <a>Train</a>
                </li>
              </ul>
            </li> */}
            <li>
              <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/add-toy">Add a Toy</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
