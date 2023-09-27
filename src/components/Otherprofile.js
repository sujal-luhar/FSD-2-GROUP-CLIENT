import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { Otherusercard } from "./Card";

function Otherprofile() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#ffffff]">
      {/* Profile Photo and Follow Button */}
      <div className="text-center">
        <img
          className="h-32 w-32 rounded-full mx-auto mb-4"
          src="images/1.jpg"
          alt="Profile"
        />
        <h1 className="text-2xl font-semibold">Your Name</h1>
        <button className="bg-[#4dc47d] text-white py-2 px-4 rounded-full mt-2">
          <FaUserPlus className="inline-block mr-2" />
          Follow
        </button>
      </div>

      {/* Image Upload Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Uploaded Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace with a map function to generate responsive photo cards */}
          {/* Example card */}
          <Otherusercard/>
          <Otherusercard/>
          <Otherusercard/>
          <Otherusercard/>
          <Otherusercard/>
          {/* End of example card */}
        </div>
      </div>
    </div>
  );
}

export default Otherprofile;
