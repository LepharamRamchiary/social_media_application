import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config.js";

function PostCard({$id, title, featureImage}) {
  
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full shadow bg-gradient-to-r from-pink-200 to-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featureImage)}
            alt=""
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
