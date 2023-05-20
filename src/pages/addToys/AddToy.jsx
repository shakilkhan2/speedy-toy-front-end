import React from "react";

const AddToy = () => {
  return (
    <div>
      <form className="bg-white border rounded-lg border-sky-500 w-[80%] mx-auto py-12 my-8 shadow-2xl">
      <h1 className="text-center text-3xl text-sky-500 font-bold">
        Add Toys
      </h1>
      <hr className="w-[70%] mx-auto mt-2 mb-8 border-sky-500" />
        <div className=" flex justify-between">
          <input
            className=" mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="name"
            id=""
            placeholder="product name"
            required
          />
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="photo"
            id=""
            placeholder="photo url"
            required
          />
        </div>
        <div className=" flex justify-between">
          <input
            className=" mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="seller"
            id=""
            placeholder="seller name"
            required
          />
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="email"
            id=""
            placeholder="seller email"
            required
          />
        </div>
        <div className=" flex justify-between">
        <select
      className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
      name="category"
      id=""
      required
    >
      <option value="" disabled selected>
        Select a category
      </option>
      <option value="car">Car</option>
      <option value="train">Train</option>
      <option value="truck">Truck</option>
    </select>
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="price"
            id=""
            placeholder="$price"
            required
          />
        </div>
        <div className=" flex justify-between">
          <input
            className=" mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="rating"
            id=""
            placeholder="rating"
            required
          />
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="quantity"
            id=""
            placeholder="available quantity"
            required
          />
        </div>
        <div className=" flex justify-between">
          <textarea
            className=" mx-auto pl-2 py-3 w-[95%] mt-6 border rounded-lg border-sky-500"
            type="text"
            placeholder="description"
            name="detail description"
            id=""
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div className="">
          <button className="w-[95%] ms-6 text-center border rounded-lg  px-8 py-3 mt-8 font-semibold text-white bg-sky-500 hover:bg-sky-400">
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
