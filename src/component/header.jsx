import React from 'react'
import logo from "../images/res-logo.png"
//import Container from 'react-bootstrap/Container';
import '../css/header.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const links = [
  {
    name: 'allFood',
    path: '/allfoods'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]




function Header() {

  return (
    <div className='header mb-5'>

    <Navbar expand="lg">
      <Container>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <h4>AYS resturtant</h4>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav'>
          <Link className='link' to='/'>home</Link>
            {
              links.map((item, index) => {
                return (
                  <Link className='link' to={item.path} key={index}>{item.name}</Link>
                )
              })
            }
             <Link className='link' to='/cart'>cart</Link>
          </Nav>
        </Navbar.Collapse>
        <i class="ri-arrow-left-up-line"></i>
      </Container>
    </Navbar>

  </div>
  
  )
}

export default Header;

/* <div className='header'>

      <Navbar expand="lg" sticky='Top'>
        <Container>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <h4>AYS resturtant</h4>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='nav'>
              {
                links.map((item, index) => {
                  return (
                    <NavLink className='link' to={item.path} key={index}>{item.name}</NavLink>
                  )
                })
              }
               <NavLink className='link' to='/cart'>cart</NavLink>
            </Nav>
          </Navbar.Collapse>
          <i class="ri-arrow-left-up-line"></i>
        </Container>
      </Navbar>

    </div>
    
    
    
    
    
    
    
     <div className='header sticky-top"'>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link class="navbar-brand logo" to="/">
          <img src={logo} alt='logo' />
          <h4>AYS resturtant</h4></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {
              links.map((item, index) => {
                return (
                  <li class="nav-item" key={index}>
                    <Link class="nav-link" to={item.path}>{item.name}</Link>
                  </li>
                )
              })
            }
            <li class="nav-item">
              <Link className='nav-link' to='/cart'>cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
    
    
    
    
    
    
    
    
    
    */