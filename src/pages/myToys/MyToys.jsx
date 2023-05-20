import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addedtoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-center text-3xl text-sky-500 font-bold">
        My Toys:{myToys.length}
      </h1>
      <div>
        <div className="overflow-x-auto w-full ">
          <table className="table w-full">
            {/* head */}
            <thead className="w-[100%]">
              <tr>
                <th>Toy</th>
                <th>Category</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Seller Email</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {myToys.map((toys) => (
              <tbody key={toys.id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 border border-sky-100 h-12">
                          <img
                            src={toys.photo}
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
                  <td>{toys.sellerEmail}</td>

                  <td>{toys.quantity}pc</td>
                  <th>
                    <Link>
                      {" "}
                      <button className="btn btn-ghost btn-xs">Update</button>
                    </Link>
                  </th>
                  <th>
                    <Link>
                      {" "}
                      <button className="btn btn-ghost btn-xs">Delete</button>
                    </Link>
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

export default MyToys;
