import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [search, setSearch] = useState("");

  useTitle("All Toy");
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const getData = () => {
    fetch("https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys?limit=20")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!search) return getData();
    const delay = setTimeout(() => {
      fetch(
        `https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys?limit=20&search=${search}`
      )
        .then((res) => res.json())
        .then((data) => setAllToys(data));
    }, 1000);
    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div>
      <h1 className="text-center text-3xl my-8 text-sky-500 font-bold">
        All Toys
      </h1>
      <div className=" mb-2 text-right">
        <div className="">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Type here"
            className="input input-bordered 
      input-info w-full max-w-xs"
          />
        </div>
      </div>
      <div className="border rounded-lg border-sky-500">
        <div className="overflow-x-auto w-full ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy</th>
                <th>Category</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Seller Email</th>
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
                    <Link to={`/toy-details/${toys._id}`}>
                      {" "}
                      <button
                        onClick={() => {
                          if (user?.uid) return;
                          toast.error(
                            "You have to log in first to view details"
                          );
                        }}
                        className="btn btn-ghost btn-xs"
                      >
                        details
                      </button>
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

export default AllToys;
