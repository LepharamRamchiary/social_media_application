// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config.js";
// import Container from "../components/container/Container";
// import PostCard from "../components/PostCard";

// function Home() {
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPost(posts.documents);
//       }
//     });
//   }, []);
//   if (post.length === 0) {
//     return (
//       <div className="w-full py-8">
//         <Container>
//           <div className="flex flex-wrap justify-center items-center">
//             <h1 className="text-5xl font-bold">Login to read posts</h1>
//           </div>
//         </Container>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {post.map((post) => (
//             <div className="p-2 w-1/4" key={post.$id}>
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import appwriteService from "../appwrite/config.js";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    appwriteService.getPosts().then((postsData) => {
      if (postsData) {
        setPosts(postsData.documents); 
      }
      setLoading(false); 
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap justify-center items-center">
            <h1 className="text-5xl font-bold">Loading...</h1> 
          </div>
        </Container>
      </div>
    );
  }

  if (location.pathname === "/") {
    if (posts.length === 0) {
      return (
        <div className="w-full py-8">
          <Container>
            <div className="flex flex-wrap justify-center items-center">
              <h1 className="text-5xl font-bold">Login to read posts</h1>
            </div>
          </Container>
        </div>
      );
    }
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PostsPage;

