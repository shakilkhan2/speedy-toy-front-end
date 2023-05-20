import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

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
                <Link to="/all-toys">All Toys</Link>
              </li>

              <li>
                <Link to="/add-toy">Add a Toy</Link>
              </li>
              <li>
                <Link to="/blogs"> Blogs</Link>
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
              <Link to="/">Home</Link>
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
              <Link to="/all-toys">All Toys</Link>
            </li>
            <li>
              <Link to="/add-toy">Add a Toy</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <span className="mr-12" title={user.displayName}>
              <img
                className="h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </span>
          )}
          <span className="mr-12">
            {user ? (
              <button onClick={handleLogOut}>
                {" "}
                <NavLink>Logout</NavLink>
              </button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
