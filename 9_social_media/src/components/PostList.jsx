import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
 const {postList}=useContext(PostListData);
 console.log(postList)
  return (
    <div className="px-4 d-flex flex-wrap gap-3 overflow-y-scroll ">
     {
      postList.map((post)=>
       (<Post key={post.id} post={post} />)
      )
     }
    </div>
  );
};

export default PostList;
