import React, { useContext } from "react";
import { useLoaderData, useParams, useRevalidator } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateModal = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const toy = useLoaderData();
  let revalidator = useRevalidator();

  console.log(toy);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    // const name = form.name.value;
    // const photo = form.photo.value;
    // const seller = form.seller.value;
    // const email = form.email.value;
    // const category = form.category.value;
    const price = form.price.value;
    // const rating = form.rating.value;
    const quantity = form.quantity.value;
    const about = form.about.value;

    const toyInfo = {
      //   productName: name,
      price: price,
      quantity: quantity,
      description: about,
    };
    console.log(toyInfo);

    fetch(`https://speedy-toy-server-shakilkhan2.vercel.app/update-toy/${id}`, {
      method: "PATCH",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())

      .then((data) => {
        revalidator.revalidate();
        Swal.fire("Good job!", "Your product successfully updated!", "success");
        console.log(data);
      });

    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleUpdateToy}
        className="bg-white border rounded-lg border-sky-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
      >
        <h1 className="text-center text-3xl text-sky-500 font-bold">
          Update a Toy
        </h1>
        <hr className="w-[70%] mx-auto mt-2 mb-8 border-sky-500" />

        <div className="flex justify-between">
          <input
            className="mx-auto pl-2 pb-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="price"
            id="p"
            defaultValue={toy.price}
            placeholder="$price"
            required
          />

          <input
            className="mx-auto pl-2 py-3 w-[45%] my-6 border rounded-lg border-sky-500"
            type="text"
            name="quantity"
            id=""
            defaultValue={toy.quantity}
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
            defaultValue={toy.description}
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div className="">
          <button className="w-[95%]  ms-4 text-center border rounded-lg  px-8 py-3 mt-8 font-semibold text-white bg-sky-500 hover:bg-sky-400">
            Update Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
