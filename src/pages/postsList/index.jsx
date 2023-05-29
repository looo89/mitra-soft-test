import React, { useEffect } from "react";
import Post from "../../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsReducer";


const PostsList = ()=> {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.posts)

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);
    
  return (
    <div>
      { posts &&
        posts.map(post=>(
        <Post title={post.title} text={post.body} id={post.id}/>
        ))
      }
    </div>
  );
}

export default PostsList