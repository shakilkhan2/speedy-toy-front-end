import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  // ---------------------
  const handleClick = (buttonName) => {
    fetch(
      `https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys?email=${user?.email}&sort=${buttonName}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  // -----------------

  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const [myToys, setMyToys] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email]);

  // delete toys:
  const handleDelete = (id) => {
    // const proceed = window.confirm("Delete?");
    // const proceed =
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your toy has been deleted.", "success");
        fetch(
          `https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // Perform actions or update UI based on the response
            console.log(data);

            const restData = myToys.filter((toy) => toy._id !== id);
            setMyToys(restData);
            // toast.success("Successfully Deleted!");
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
      }
    });
    // if (proceed) {

    // }
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-8 text-sky-500 font-bold">
        My Toys
      </h1>
      {/* sort */}

      {/* sorting */}
      <div className="w-60 mx-auto mb-4">
        <div className="btn-group grid grid-cols-2">
          <button
            className={`btn ${
              selectedButton === "previous" ? "btn-colored" : "btn-outline"
            }`}
            onClick={() => handleClick("acc")}
          >
            Low Prices
          </button>
          <button
            className={`btn ${
              selectedButton === "next" ? "btn-colored" : "btn-outline"
            }`}
            onClick={() => handleClick("dec")}
          >
            High Prices
          </button>
        </div>
      </div>

      <div className="rounded-lg border-sky-500">
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
                <th>Available </th>
                <th>Details</th>
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
                    <Link to={`/toy-details/${toys._id}`}>
                      {" "}
                      <button className="btn btn-ghost btn-xs">Details</button>
                    </Link>
                  </th>
                  <th>
                    <Link to={`/update/${toys._id}`}>
                      <button className="btn btn-ghost btn-xs">Update</button>
                    </Link>
                  </th>
                  <th>
                    <Link>
                      {" "}
                      <button
                        onClick={() => handleDelete(toys._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        Delete
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

export default MyToys;
