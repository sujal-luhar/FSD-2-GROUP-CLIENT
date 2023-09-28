import React from "react";

function Userprofile() {
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
      </div>

      {/* Image Upload Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Uploaded Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace with a map function to generate responsive photo cards */}
          {/* Example card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="images/background.jpg"
              alt="Uploaded-Something"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
          </div>
          {/* End of example card */}
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
