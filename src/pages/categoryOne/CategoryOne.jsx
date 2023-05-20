import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryOne = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://speedy-toy-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);

  const myCars = cars.filter((car) => car.category === "car");
  // console.log(myCars);

  return (
    <div>
      <h3 className="text-center text-3xl font-bold text-sky-500 mt-8 mb-4 ">
        Sports Car
      </h3>
      <div className="grid grid-cols-4 gap-4  ">
        {myCars.map((car) => (
          <div
            key={car.id}
            className=" bg-gradient-to-br from-pink-100 to-sky-300 p-4 rounded-lg drop-shadow-2xl "
          >
            <img className="h-52 rounded-lg" src={car.picture} alt="" />
            <div className="text-center">
              <h4 className="text-black text-lg font-bold">{car.name}</h4>
              <h4 className="text-black text-xl font-bold">${car.price}</h4>
              <h4 className="text-black text-xl font-bold">
                ratings: {car.rating}
              </h4>
            </div>
            <Link to={`/car/${car.id}`}>
              <button className="bg-gradient-to-br from-sky-400 to-sky-700 hover:bg-gradient-to-br hover:from-sky-700 hover:to-sky-500 w-full p-2 mt-2 rounded-lg text-xl font-bold text-white">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryOne;
