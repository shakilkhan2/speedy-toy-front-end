import React, { useEffect, useState } from "react";

const CategoryOne = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/formula-one")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Formula One car</h3>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="hover:border border-sky-200  p-4">
            <img className="h-52 " src={car.picture} alt="" />
            <h4 className="text-sky-400">{car.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryOne;
