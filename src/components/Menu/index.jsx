import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { ABOUT_ME_ROUTE, POSTS_LIST_ROUTE } from '../../routes';
import { NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const Menu = ({ open, handleClose}) => {
  
  return (
    <Offcanvas show={open} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Item>
            <NavLink to={ABOUT_ME_ROUTE}>About me</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to={POSTS_LIST_ROUTE}>Posts</NavLink>
          </Nav.Item>
          </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Menu