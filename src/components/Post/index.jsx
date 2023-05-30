import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Button, Collapse, Spinner, ListGroup } from 'react-bootstrap'
import { getComments} from '../../store/commentsReducer'
import Comment from '../Comment'

import user from '../../image/user.png'


const Post = ({ post, link }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const comments = useSelector(store => store?.commentsReducer?.comments);
  const status = useSelector(store => store?.commentsReducer?.status);
  const dispatch = useDispatch();
  
  const id = post.userId;
  
  const handleClick = (id) => {
    setOpen(!open);
    if (comments.length === 0) {
      dispatch(getComments(id));
    }
  };
  
  return (
    <Col className="my-1 rounded border border-dark-subtle p-3" sm={12}>
      < Link to={`/user/${id}`}>
        <img src={user} alt="user" width="50px" height="50px" />
      </Link>
      <h3 className="post__title">
        {post.title || 'No title'}
      </h3>
      <p className="post__text">{post.body || 'No body'}</p>
      <Button variant="mx-4"
              size="sm"
              onClick={() => handleClick(post.id)}
              style={{backgroundColor: '#01A09A'}}
      >
        Комментарии
      </Button>
      <Collapse in={open} className="mt-4">
        <ListGroup id="example-collapse-text" variant="flush">
        { status
        ?
          comments.map((comment) => (
                comment.postId === post.id && <Comment comment={comment} key={comment.id} id={post.id}/>
              ))
          
          :
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </ListGroup>
      </Collapse>
    </Col>
  );
};

export default Post