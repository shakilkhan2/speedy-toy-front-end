import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Toys = () => {
  useTitle("Toy Details");
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
          <div className="bg-sky-100 ms-20 p-4 rounded-lg">
            <h1 className="text-4xl font-bold">{truck.name}</h1>
            <h1>{truck.seller}</h1>
            <h1>{truck.email}</h1>
            <h1>{truck.price}</h1>
            <h1>{truck.quantity}</h1>
            <h1>rating: {truck.rating}</h1>
            <h1>{truck.about}</h1>
            <button className="bg-sky-600 hover:bg-sky-500  p-2 mt-2 rounded-xl px-4 text-lg font-bold text-white">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toys;
