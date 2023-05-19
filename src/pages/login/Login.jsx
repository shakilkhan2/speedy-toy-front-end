import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="bg-white border rounded-lg border-sky-500 w-[50%] mx-auto py-12 my-8 shadow-2xl">
      <h1 className="text-center text-3xl text-sky-500 font-bold">
        Please Log in
      </h1>
      <hr className="w-[70%] mx-auto mt-2 border-sky-500" />
      <div className="text-center">
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] my-6 border rounded-lg border-sky-500"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />{" "}
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] border rounded-lg border-sky-500"
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />{" "}
        <br />
        <button className="text-center border rounded-lg border-sky-500 bg-white text-sky-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-sky-500">
          Login
        </button>
        <p>
          <small>
            Don’t have an account?{" "}
            <span className="text-sky-500 hover:underline">
              <Link to="/register">Create an account.</Link>
            </span>
          </small>
        </p>
      </div>
    </form>
  );
};

export default Login;
