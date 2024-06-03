// import React from 'react'
// import {Link, Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <Link to='/about'><li>About</li></Link> 
//           <Link to="/skills"><li>Skills</li></Link>
//           <Link to='/contact'><li>Contact</li></Link> 
//           <Link to='/projects'><li>Projects</li></Link> 

//         </ul>
//       </nav>
//       <Outlet/>
//     </div>
//   )
// }

// export default Layout

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosHeart } from "react-icons/io";
import './App.css';
import Button from 'react-bootstrap/Button';
import { NavLink, Outlet } from 'react-router-dom';


function Navbars() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" className='nou'>Nourishment</Navbar.Brand>
          <Nav className="a me-auto fw-bold ms-5">
            
       <NavLink to="/about" className='home text-decoration-none text-reset'>ABOUT</NavLink>
       <NavLink to="/skills" className="ms-5 text-decoration-none text-reset">SKILLS</NavLink>
        <NavLink to="/contact" className="ms-5 text-decoration-none text-reset">Contact< IoIosHeart /></NavLink>
        <NavLink to="/projects" className="ms-5 text-decoration-none text-reset">PROJECTS</NavLink>
        {/* resume */}
        </Nav>
        </Container>
      </Navbar>

      <Outlet/>
    </>
    
  );
}

export default Navbars;