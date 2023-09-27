import React from "react";
import { Card } from "./Card";

function Category() {
  return (
    <div className="mt-16" style={{userSelect:"none"}}>
      <h1 className="text-2xl font-semibold sm:text-5xl sm:font-bold text-center mb-3 sm:mb-10">
        Read our Trending Articles
      </h1>
      <div className="flex items-center justify-center mb-10">
        <input
          type="text"
          name="search"
          className="text-xl sm:text-3xl font-bold w-9/12 sm:w-10/12 border-2 border-[#4dc47d]  rounded-lg ps-10 sm:ps-10 sm:p-2  focus:border-[#4dc47d] focus:border-2"
          placeholder="Search..."
        />
      </div>
      <div className="categories flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-1/2">
          <button class="bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] text-white font-bold py-2 px-4 rounded gradient-transition">
            Science
          </button>
          <button class="bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] text-white font-bold py-2 px-4 rounded gradient-transition">
            Technology
          </button>
          <button class="bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] text-white font-bold py-2 px-4 rounded gradient-transition">
            Robotics
          </button>
          <button class="bg-gradient-to-r from-[#4CB8C4] to-[#3CD3AD] text-white font-bold py-2 px-4 rounded gradient-transition">
            Others
          </button>
        </div>
      </div>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 bg-[#ffffff] p-10"
        style={{ userSelect: "none" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Category;
