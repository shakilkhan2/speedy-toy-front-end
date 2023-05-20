import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 gap-4 my-4  ">
      {/* one */}
      <div className="col-span-1 row-span-2  relative group">
        <img
          className="border rounded-lg border-sky-600 w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/81V7Z6v9MoL._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
      {/* two */}
      <div className="col-span-2 row-span-4 relative group">
        <img
          className=" border rounded-lg border-sky-600 w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/719+BP+gpsL._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>

      <div className="col-span-1 row-span-2 relative group">
        <img
          className="border rounded-lg border-sky-600 w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/810zYxoqodL._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
      <div className="col-span-1 row-span-2  relative group">
        <img
          className="border border-sky-600 rounded-lg w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/71gjVQbMp3L._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
      <div className="col-span-1 row-span-4 relative group">
        <img
          className="border border-sky-600 rounded-lg w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/61YZAgR-XTL._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
      <div className="col-span-1 row-span-2 relative group">
        <img
          className="border border-sky-600 rounded-lg w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/61YZAgR-XTL._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
      <div className="col-span-1 row-span-2 relative group">
        <img
          className="border rounded-lg border-sky-600 w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/81V7Z6v9MoL._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
      <div className="col-span-1 row-span-2 relative group">
        <img
          className="border rounded-lg border-sky-600 w-full h-full object-cover transition-transform ease-in-out duration-300 group-hover:scale-95"
          src="https://m.media-amazon.com/images/I/61Eq8Kroc3L._AC_SX569_.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-300 opacity-0 flex items-center justify-center group-hover:opacity-100">
          <p className="text-white text-lg font-bold">
            Lionel The Polar Express Model Train Set
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
