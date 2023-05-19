import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-57px)]">
      <p className="text-7xl font-thin text-sky-700">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-sky-400"></div>
      <p className="text-7xl font-thin text-sky-700">ading....</p>
    </div>
  );
};

export default Loading;
