import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Navbar, Button } from 'react-bootstrap';
import Menu from '../Menu/index'


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose=()=>{
    setOpen(false)
  }
  
  return (
    <header style={{backgroundColor: '#f5f5f5'}}>
      <Navbar class="navbar navbar-expand-lg">
        <Container>
          <div>
            <Button variant="outline-secondary navbar-toggler-icon p-3"
                    size="lg"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
            />
            <img 
            style={{marginLeft: '60px'}}
            src='https://mitrasoft.ru/wp-content/uploads/2021/08/logo-new.svg'
          />
          </div>
        </Container>
      </Navbar>
      <Menu open={open} handleClose={handleClose}/>
    </header>
  );
};

export default Header