import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const CategoryOne = () => {
  const { user } = useContext(AuthContext);
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4  ">
        {myCars.map((car) => (
          <div
            key={car.id}
            className=" bg-gradient-to-br from-amber-100 to-sky-300 p-4 rounded-lg drop-shadow-2xl "
          >
            <img className="h-52 rounded-lg" src={car.picture} alt="" />
            <div className="">
              <h4 className="text-sky-800 text-lg font-bold">{car.name}</h4>
              <h4 className="text-sky-950 text-lg font-semibold">
                <span className="font-bold text-sky-800">Price:</span> $
                {car.price}
              </h4>
              <Rating
                className="text-amber-400"
                placeholderRating={car.rating}
                readonly
                emptySymbol={<BsStar />}
                placeholderSymbol={<BsStarFill />}
                fullSymbol={<BsStarFill />}
              ></Rating>
            </div>
            <Link to={`/car/${car.id}`}>
              <button
                onClick={() => {
                  if (user?.uid) return;
                  toast.error("You have to log in first to view details");
                }}
                className="bg-gradient-to-br from-sky-400 to-sky-700 hover:bg-gradient-to-br hover:from-sky-700 hover:to-sky-500 w-full p-2 mt-2 rounded-lg text-xl font-bold text-white"
              >
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
