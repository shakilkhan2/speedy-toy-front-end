import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details");
  const toy = useLoaderData();
  console.log(toy);

  return (
    <div>
      <div className="flex justify-between border border-sky-300 my-4 p-4 rounded-lg">
        <div>
          <img className="rounded-lg h-60 " src={toy.photo} alt="" />
        </div>
        <div className="bg-sky-100 ms-20 p-4 rounded-lg w-[50%]">
          <h1 className="text-4xl font-bold text-sky-800">{toy.productName}</h1>
          <h1 className="text-lg "><span className="text-xl font-semibold">Seller: </span>{toy.seller}</h1>
          
          <h1 className="text-lg "><span className="text-xl font-semibold">Price: </span>${toy.price}</h1>
          <h1 className="text-lg "><span className="text-xl font-semibold">Quantity: </span>{toy.quantity}pc</h1>
          <h1 className="text-lg "><span className="text-xl font-semibold">rating:</span> {toy.rating}</h1>
          <h1>{toy.description}</h1>
          <button className="bg-sky-600 hover:bg-sky-500  p-2 mt-2 rounded-xl px-4 text-lg font-bold text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
