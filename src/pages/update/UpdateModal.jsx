import React from "react";

const UpdateModal = ({ myToys }) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="btn btn-ghost btn-xs">
        Update
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Toy Info</h3>
          <div>
            <input
              className="mx-auto pl-2 py-3 w-[50%] my-6 border rounded-lg border-sky-500"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />{" "}
            <br />
            <input
              className=" pl-2 py-3 w-[50%] mx-auto border rounded-lg border-sky-500"
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Update
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
