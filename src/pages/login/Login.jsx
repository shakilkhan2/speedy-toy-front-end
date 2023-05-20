import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import app from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // error msg:
  const [error, setError] = useState({ isError: false, message: "" });

  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user?.uid) {
    return <Navigate to={from}></Navigate>;
  }
  const handleLogIn = (event) => {
    event.preventDefault();
    setError({ isError: false, message: "" });
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError({ isError: true, message: error.message });
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    // console.log("google goolge ggoole");
    setError({ isError: false, message: "" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError({ isError: true, message: error.message });
      });
  };

  return (
    <form
      onSubmit={handleLogIn}
      className="bg-white border rounded-lg border-sky-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl text-sky-500 font-bold">
        Please Log in
      </h1>
      <hr className="w-[70%] mx-auto mt-2 border-sky-500" />
      <div className="text-center">
        <br />
        <input
          className="mx-auto pl-2 py-3 w-[50%] my-6 border rounded-lg border-sky-500"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          required
        />{" "}
        <br />
        <input
          className="mx-auto pl-2 py-3 w-[50%] border rounded-lg border-sky-500"
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />{" "}
        <br />
        <button className="text-center border rounded-lg  border-sky-500 bg-white text-sky-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-sky-500 w-[20%] mx-auto">
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
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center cursor-pointer justify-around  border rounded-lg  px-8 py-3 mt-8 font-semibold  text-white bg-sky-950 w-[50%] mx-auto"
        >
          <div>
            <FcGoogle className="text-3xl" />
          </div>
          <div>
            <p>Continue with google</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
