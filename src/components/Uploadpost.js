import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

function Uploadpost() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tags, setTags] = useState({
    science: false,
    technology: false,
    robotics: false,
    others: false,
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // You can add logic to handle the uploaded image here
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleTagChange = (tag) => {
    setTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag],
    }));
  };

  const handleUploadButtonClick = () => {
    // Implement the logic to upload the selected image with tags here
  };

  return (
    <form className="bg-[#ffffff] pb-10 mt-16">
      <div className="container mx-auto px-4 py-8 ">
        <div className="lg:flex items-center justify-center">
          {/* Left Side: Image Upload */}
          <div className="w-full lg:w-1/2 p-4 lg:mr-4">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <div className="relative border-dashed border-2 border-gray-300 bg-gray-100 p-4 rounded-lg text-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="w-40 h-40 mx-auto mb-4 object-cover rounded-lg"
                  />
                ) : (
                  <div>
                    <FaCloudUploadAlt className="mx-auto text-gray-400 text-5xl mb-4" />
                    <p className="text-gray-600">Click to upload an image</p>
                  </div>
                )}
              </div>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          {/* Right Side: Tags */}
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#4dc47d]"
                  checked={tags.science}
                  onChange={() => handleTagChange("science")}
                />
                <span className="ml-2">Science</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#4dc47d]"
                  checked={tags.technology}
                  onChange={() => handleTagChange("technology")}
                />
                <span className="ml-2">Technology</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#4dc47d]"
                  checked={tags.robotics}
                  onChange={() => handleTagChange("robotics")}
                />
                <span className="ml-2">Robotics</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#4dc47d]"
                  checked={tags.others}
                  onChange={() => handleTagChange("others")}
                />
                <span className="ml-2">Others</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Button Centered at the Bottom */}
      <div className="flex justify-center my-8 ">
        <button
          className="bg-[#4dc47d] text-white py-2 px-4 rounded-full"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </form>
  );
}

export default Uploadpost;
