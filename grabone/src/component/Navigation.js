import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navigation.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLocationOutline } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';

import { HiOutlineMail } from 'react-icons/hi';


import {
  Container,
  Navbar,
  NavItem,
  Nav,
  Form,
  Button,
  FloatingLabel,
  Modal,NavDropdown,FormControl
} from "react-bootstrap";

const Navigation = () => {


  const history = useNavigate();


  return (
    <>
     <Navbar className="navColor" color="#01b2ee" expand="lg">
  <div className="colorFont container-fluid col-11">
    <Navbar.Brand href="#home" >
   <h3 className="brand">GrabOne</h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <NavDropdown title='Auckland' id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>    <Nav.Item>
      <Nav.Link eventKey="link-1"><FiHeart size={25}/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><FiShoppingCart size={25}/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" >
        <BsPerson size={25}/>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" >
        <HiOutlineMail size={25}/> Subscribe
      </Nav.Link>
    </Nav.Item>
    </Navbar.Collapse>
  </div>
</Navbar>


<Navbar className="navColor2 " color="#01b2ee" expand="lg">
  <div className="colorFont2 container-fluid col-11 ">

    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
    <NavDropdown title="Browse Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
    <Nav.Item>
      <Nav.Link eventKey="link-1">What's New</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Trending</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link >
        For You
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        Shop Products
      </Nav.Link>
    </Nav.Item>
    {/* ///////////////////// */}
    <Form className="d-flex" >
        <FormControl
          type="search"
          placeholder=" Search GrabOne"
          className="me-2 search"
          aria-label="Search"
         
        />
        
      </Form>


    </Navbar.Collapse>
  </div>
</Navbar>
    </>
  );
};
export default Navigation;
