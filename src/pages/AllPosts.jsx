import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPosts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPost(posts.documents);
      }
    });
  }, []);
  
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
