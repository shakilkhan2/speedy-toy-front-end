import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryThree = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);

  const myTrucks = cars.filter((car) => car.category === "truck");
  console.log(myTrucks);

  return (
    <div>
      <h3 className="text-center text-3xl font-bold text-sky-500 mt-8 mb-4 ">
        Tricky Truck
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {myTrucks.map((car) => (
          <div key={car.id} className=" bg-sky-200 p-4 rounded-lg">
            <img className="h-52 rounded-lg" src={car.picture} alt="" />
            <div className="text-center">
              <h4 className="text-black text-lg font-bold">{car.name}</h4>
              <h4 className="text-black text-xl font-bold">${car.price}</h4>
              <h4 className="text-black text-xl font-bold">
                ratings: {car.rating}
              </h4>
            </div>
            <Link to={`/truck/${car.id}`}>
              <button className="bg-sky-600 hover:bg-sky-500 w-full p-2 mt-2 rounded-lg text-xl font-bold text-white">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryThree;
