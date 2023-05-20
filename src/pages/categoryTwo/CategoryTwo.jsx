import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CategoryTwo = () => {
  const { user } = useContext(AuthContext);
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch("https://speedy-toy-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setTrains(data))
      .catch((error) => console.log(error));
  }, []);

  const myTrains = trains.filter((train) => train.category === "train");
  console.log(myTrains);

  return (
    <div>
      <h3 className="text-center text-3xl font-bold text-sky-500 mt-8 mb-4">
        Exiting Trains
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {myTrains.map((train) => (
          <div
            key={train.id}
            className=" bg-gradient-to-br from-amber-100 to-sky-300  p-4 rounded-lg"
          >
            <img className="h-52 rounded-lg " src={train.picture} alt="" />
            <div className="text-center">
              <h4 className="text-black text-lg font-bold">{train.name}</h4>
              <h4 className="text-black text-xl font-bold">${train.price}</h4>
              <h4 className="text-black text-xl font-bold">
                ratings: {train.rating}
              </h4>
            </div>
            <Link to={`/train/${train.id}`}>
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

export default CategoryTwo;
