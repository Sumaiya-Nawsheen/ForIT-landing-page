import React, { useState } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import Logo from "../../images/Logo@3x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

export default function NavBar() {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY>=90){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    };
  };
  window.addEventListener('scroll', changeBackground);

const style = {
  fontSize: '23px',
  color: 'white',
  margin:'5px',

}

    return (
      <>
      <div className='banner1' style={{height:'1.75em'}} ></div>
      <div className='sticky-top smallNav' style={{height:'4.5em'}}>
    <Navbar  collapseOnSelect expand="lg"  className={navbar ? 'navbar active' : 'navbar'}>
      <Navbar.Brand href="#home" style={{marginLeft:'20px'}} className='logoSize'><img style={{width:'50%', height:'50px'}} src={Logo} alt='forit'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#home" style={style}>Home</Nav.Link>
          <Nav.Link href="#blog" style={style}>Blog</Nav.Link>
          <Nav.Link href="#elements" style={style}>Elements</Nav.Link>
          <Nav.Link href="#pages" style={style}>Pages</Nav.Link>
          <Button variant="outline-transparent" style={style}><FontAwesomeIcon icon={faSearch} /></Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
    </div>
  </>
    )
}
