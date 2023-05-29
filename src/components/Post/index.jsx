import React, { useState } from "react";
import Comment from "../Comment";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/commentsReducer";


const Post = ({title, text, id})=> {
  
  const dispatch = useDispatch()
  const comments = useSelector(state => state.commentsReducer.comments)

    const [isShowComments, setIsShowComments] = useState(false)

    const handleClick = (id) => {
      setIsShowComments(!isShowComments);
      if (comments.length === 0) {
        dispatch(getComments(id));
      }
    };

  return (
    <div style={{border: "1px solid grey"}}>
        <div>title: {title}</div>
        <div>text: {text}</div>
        <button onClick={handleClick}>comments</button>
        {isShowComments && <Comment/>}

    </div>
  );
}

export default Post