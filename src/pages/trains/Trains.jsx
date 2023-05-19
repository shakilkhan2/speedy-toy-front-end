import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Toys = () => {
  const { id } = useParams();
  console.log(id);
  const allTrains = useLoaderData();
  console.log(allTrains);
  const trains = allTrains.filter((train) => train.id == id);
  console.log(trains);

  return (
    <div>
      {trains.map((train) => (
        <div
          key={train.id}
          className="flex  border border-sky-300 my-4 p-4 rounded-lg"
        >
          <div>
            <img className="rounded-lg" src={train.picture} alt="" />
          </div>
          <div className="bg-sky-100 ms-20 p-4 rounded-lg">
            <h1 className="text-4xl font-bold">{train.name}</h1>
            <h1>{train.seller}</h1>
            <h1>{train.email}</h1>
            <h1>{train.price}</h1>
            <h1>{train.quantity}</h1>
            <h1>rating: {train.rating}</h1>
            <h1>{train.about}</h1>
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
