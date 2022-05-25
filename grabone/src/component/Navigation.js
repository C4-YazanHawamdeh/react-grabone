import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navigation.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Navbar,
  NavItem,
  Nav,
  Form,
  Button,
  FloatingLabel,
  Modal,
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
    <Nav.Link href="/home">Active</Nav.Link>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
    </Navbar.Collapse>
  </div>
</Navbar>


<Navbar className="navColor2 " color="#01b2ee" expand="lg">
  <div className="colorFont2 container-fluid col-11 ">

    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
    <Nav.Link href="">Browse category</Nav.Link>
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
    </Navbar.Collapse>
  </div>
</Navbar>
    </>
  );
};
export default Navigation;
