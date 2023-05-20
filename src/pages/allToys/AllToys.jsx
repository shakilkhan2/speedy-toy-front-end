import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedtoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl text-sky-500 font-bold">
        All Toys{allToys.length}
      </h1>
      <div className="border border-sky-500">
        <div className="overflow-x-auto w-full ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                
                <th>Toy</th>
                <th>Category</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Available Quantity</th>
                <th></th>
              </tr>
            </thead>
            {allToys.map((toys) => (
              <tbody key={toys.id}>
                {/* row 1 */}
                <tr>
                  
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 border border-sky-100 h-12">
                          <img
                            src="https://m.media-amazon.com/images/I/71gjVQbMp3L._AC_SX569_.jpg"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toys.productName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{toys.category}</td>
                  <td>${toys.price}</td>
                  <td>{toys.seller}</td>
                  <td>{toys.quantity}pc</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
