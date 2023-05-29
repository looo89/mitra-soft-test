import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { ABOUT_ME_ROUTE, POSTS_LIST_ROUTE } from '../../routes';
import { NavLink } from 'react-router-dom';

const Menu = ({ open }) => {
  
  return (

    <Nav
    activeKey={POSTS_LIST_ROUTE}
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    hidden={!open}
  >
    <Nav.Item>
      <NavLink to={ABOUT_ME_ROUTE}>About me</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink to={POSTS_LIST_ROUTE}>Posts</NavLink>
    </Nav.Item>
  </Nav>
  );
};

export default Menu