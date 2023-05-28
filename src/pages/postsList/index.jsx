import React from "react";
import Post from "../../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/postsReducer";

const PostsList = ()=> {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.posts)
    
    console.log(111, posts)
  return (
    <div>
        <button  onClick={() => dispatch(fetchPosts())}>posts</button>
     <Post/>
    </div>
  );
}

export default PostsList