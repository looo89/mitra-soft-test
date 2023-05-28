import React, { useState } from "react";
import Comment from "../Comment";

const Post = ()=> {

    const [isShowComments, setIsShowComments] = useState(false)

  return (
    <div>
        <div>avatar</div>
        <div>title</div>
        <div>text</div>
        <button onClick={()=>setIsShowComments(!isShowComments)}>comments</button>
        {isShowComments && <Comment/>}

    </div>
  );
}

export default Post