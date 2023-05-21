import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add a Toy");

  const handleAddAToy = (event) => {
    Swal.fire("Good job!", "Your product successfully added!", "success");
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const about = form.about.value;

    const toyInfo = {
      productName: name,
      photo: photo,
      seller: seller,
      sellerEmail: email,
      category: category,
      price: price,
      rating: rating,
      quantity: quantity,
      description: about,
    };
    console.log(toyInfo);

    fetch("https://speedy-toy-server-shakilkhan2.vercel.app/addedToys", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleAddAToy}
        className="bg-white border rounded-lg border-sky-500 w-[80%] mx-auto py-12 my-8 shadow-2xl"
      >
        <h1 className="text-center text-3xl text-sky-500 font-bold">
          Add a Toy
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
            defaultValue="https://m.media-amazon.com/images/I/713QEw126JL._AC_SX569_.jpg"
            placeholder="photo url"
          />
        </div>
        <div className=" flex justify-between">
          <input
            className=" mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="seller"
            id=""
            defaultValue={user?.displayName}
            placeholder="seller name"
          />
          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="email"
            id=""
            defaultValue={user?.email}
            placeholder="seller email"
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
            name="about"
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
