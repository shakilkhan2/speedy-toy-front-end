import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  // err
  const [error, setError] = useState({ isError: false, message: "" });

  const handleRegister = (event) => {
    event.preventDefault();
    setError({ isError: false, message: "" });

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUser(name, photo);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError({ isError: true, message: error.message });
      });
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white border rounded-lg border-sky-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl text-sky-500 font-bold">
        Please Register
      </h1>
      <hr className="w-[70%] mx-auto mt-2 border-sky-500" />
      <div className="text-center">
        <br />
        <input
          className="mr-4 pl-2 py-3 w-[50%] mt-6 border rounded-lg border-sky-500"
          type="text"
          name="name"
          id=""
          placeholder="Name"
        />{" "}
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
        <input
          className="mr-4 pl-2 py-3 mt-6 w-[50%] border rounded-lg border-sky-500"
          type="text"
          name="photo"
          id=""
          placeholder="photo"
        />
        <br />
        {error.isError && (
          <p className="mt-4 text-red-600 text-xs text-center">
            {error.message}
          </p>
        )}
        <button className="text-center border rounded-lg border-sky-500 bg-white text-sky-500 px-8 py-3 mt-8 font-semibold hover:text-white hover:bg-sky-500">
          Register
        </button>
        <p>
          <small>
            Already have an account?{" "}
            <span className="text-sky-500 hover:underline">
              <Link to="/login">Login.</Link>
            </span>
          </small>
        </p>
      </div>
    </form>
  );
};

export default Register;
