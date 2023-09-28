import React, { useState } from "react";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

function ImageDetail() {
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
        <div className="p-12 gap-4">
            <div className="p-4 grid grid-cols-6">
                <h1 className="text-xl font-semibold mb-2 col-start-1 col-end-4">
                    <Link to="/otherprofile" className="font-medium text-black">
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
                        className="bg-[#c8f4d5] text-black  rounded-lg col-end-7 col-span-1 text-center"
                        onClick={clickedFollowButton}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        className="bg-[#81e0a7] text-black py-2 px-4  rounded-lg col-end-7 col-span-1 text-center"
                        onClick={clickedFollowButton}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div >
                <img
                    src="https://drscdn.500px.org/photo/1078059637/q%3D80_m%3D2000/v2?sig=ae8094b72e8ba6c89905dbdeac379e7dc4e17e0a5041055792394a026cd8b935"
                    alt="Profile"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            <div className="flex justify-between p-4">
                <button onClick={handleLike}>
                    <FaHeart
                        className={`text-xl ${isLiked ? "text-red-500" : "text-[#d4f5de]"}`}
                    />
                </button>
                <button onClick={handleBookmark}>
                    <FaBookmark
                        className={`text-xl ${isBookmarked ? "text-[#4dc47d]" : "text-[#d4f5de]"
                            }`}
                    />
                </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Image Title</h3>
              <p className="text-gray-600">Description of the image.</p>
            </div>
        </div>
    )
}

export default ImageDetail