import React from "react";

import { ListGroup } from 'react-bootstrap';
const Comment = ({ comment }) => {
  return (
      <ListGroup.Item>
        <h5>{comment.email || 'No email'}</h5>
        <p>{comment.body || 'No body'}</p>
      </ListGroup.Item>
  );
};

export default Comment