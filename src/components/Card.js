import React, { useState } from "react";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const [clickedFollow, setClickedFollow] = useState(false);
  const clickedFollowButton = () => {
    setClickedFollow(!clickedFollow);
  };

  return (
    <div className="max-w-md mx-auto bg-[#1f3626] shadow-md rounded-lg overflow-hidden m-3 p-1">
      <div className="p-4 grid grid-cols-6 gap-4">
        <h1 className="text-xl font-semibold mb-2 col-start-1 col-end-4">
          <Link to="/otherprofile" className="font-medium text-[#d4f5de]">
            <img
              className="h-8 w-8  rounded-full inline-block mr-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            John Doe
          </Link>
        </h1>
        {clickedFollow ? (
          <button
            className="bg-[#4dc47d] text-black py-2 px-4 rounded-lg col-end-7 col-span-2 text-center"
            onClick={clickedFollowButton}
          >
            Unfollow
          </button>
        ) : (
          <button
            className="bg-[#d4f5de] text-black py-2 px-4 rounded-lg col-end-7 col-span-2 text-center"
            onClick={clickedFollowButton}
          >
            Follow
          </button>
        )}
      </div>
      <img
        src="https://via.placeholder.com/400x300"
        alt="Profile"
        className="w-full h-auto "
      />
      <div className="flex justify-between p-4">
        <button onClick={handleLike}>
          <FaHeart
            className={`text-xl ${isLiked ? "text-red-500" : "text-[#d4f5de]"}`}
          />
        </button>
        <button onClick={handleBookmark}>
          <FaBookmark
            className={`text-xl ${
              isBookmarked ? "text-[#4dc47d]" : "text-[#d4f5de]"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

function Otherusercard() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const [clickedFollow, setClickedFollow] = useState(false);
  const clickedFollowButton = () => {
    setClickedFollow(!clickedFollow);
  };

  return (
    <div className="max-w-md mx-auto bg-[#1f3626] shadow-md rounded-lg overflow-hidden m-3 p-1 pt-3 ">
      <img
        src="https://via.placeholder.com/400x300"
        alt="Profile"
        className="w-full h-auto "
      />
      <div className="flex justify-between p-4">
        <button onClick={handleLike}>
          <FaHeart
            className={`text-xl ${isLiked ? "text-red-500" : "text-[#d4f5de]"}`}
          />
        </button>
        <button onClick={handleBookmark}>
          <FaBookmark
            className={`text-xl ${
              isBookmarked ? "text-[#4dc47d]" : "text-[#d4f5de]"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export { Card, Otherusercard };
