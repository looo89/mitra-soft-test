import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../store/userReducer";
import { Card, Container } from "react-bootstrap";

const AboutUser = ()=> {
  const param = useParams()
  const id = param.id

  const dispatch = useDispatch()
  const user = useSelector(store => store?.userReducer?.user);
  
  useEffect(() => {
    dispatch(getUser(id));
  }, [id])

  return (
    <Container>
      <Card>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Text>email: {user?.email}</Card.Text>        
      </Card>
    </Container>
  );
}

export default AboutUser
