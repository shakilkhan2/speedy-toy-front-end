import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const trucks = () => {
  useTitle("truck Details");
  const { id } = useParams();
  // console.log(id);
  const allTrucks = useLoaderData();
  // console.log(allTrucks);
  const trucks = allTrucks.filter((truck) => truck.id == id);
  console.log(trucks);

  return (
    <div>
      {trucks.map((truck) => (
        <div
          key={truck.id}
          className="flex  border border-sky-300 my-4 p-4 rounded-lg"
        >
          <div>
            <img className="rounded-lg" src={truck.picture} alt="" />
          </div>
          <div className="bg-sky-100 ms-20 p-4 rounded-lg w-[50%]">
            <h1 className="text-4xl font-bold text-sky-800">{truck.name}</h1>
            <h1 className="text-lg ">
              <span className="text-xl font-semibold">Seller: </span>
              {truck.seller}
            </h1>

            <h1 className="text-lg ">
              <span className="text-xl font-semibold">Price: </span>$
              {truck.price}
            </h1>
            <h1 className="text-lg ">
              <span className="text-xl font-semibold">Quantity: </span>
              {truck.quantity}pc
            </h1>
            <h1 className="text-lg ">
              <span className="text-xl font-semibold">rating:</span>{" "}
              {truck.rating}
            </h1>
            <h1>{truck.description}</h1>
            <button className="bg-sky-600 hover:bg-sky-500  p-2 mt-2 rounded-xl px-4 text-lg font-bold text-white">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default trucks;
