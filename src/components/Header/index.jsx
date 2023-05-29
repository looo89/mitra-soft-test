import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Navbar, Button } from 'react-bootstrap';
import Menu from '../Menu/index'


const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Navbar>
        <Container>
          <Button variant="outline-secondary navbar-toggler-icon p-2"
                  size="lg"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
          />
        </Container>
      </Navbar>
      <Menu open={open}/>
    </>
  );
};

export default Header