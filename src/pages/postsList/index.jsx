import React, { useEffect } from "react";
import Post from "../../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsReducer";
import { Container } from "react-bootstrap";


const PostsList = ()=> {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.posts)

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);
    
  return (
    <Container>
      { posts &&
        posts.map(post=>(
        <Post title={post.title} text={post.body} id={post.id}/>
        ))
      }
    </Container>
  );
}

export default PostsList