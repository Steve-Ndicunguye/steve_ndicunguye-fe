import { useState, useEffect } from "react";
import "./Navbar.css"
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import closeButton from '../../assets/img/closeButton.png';
import { AwaitingBlog }from "../PopupBox/AwaitingBlog";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const closePopup = () => {
      setIsOpen(false);
    };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className="hideLogo">
            <a href="#" className="myLogo">Steve Ndicunguye</a>
            <span className="navbar-toggler-icon" onClick={() => setOpened(true)}></span>
          </Navbar.Brand>
          <AwaitingBlog isOpen={isOpen} onClose={closePopup} />
          <Navbar.Collapse id="basic-navbar-nav" className={opened ? "opened" : ""}>
            <Nav className="ms-auto" onClick={() => setOpened(false)}>
              <Nav.Link href="#" className="closeButton" onClick={() => setOpened(false)}><img src={closeButton} alt="" /></Nav.Link>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://github.com/ste3ve3" target="_blank" rel="noreferrer" className="githubIcon"><img src={navIcon2} alt="" /></a>
                <a href="https://www.linkedin.com/in/steve-ndicunguye-89bb6822b/" target="_blank" rel="noreferrer" className="linkedlinIcon"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/did3rot" target="_blank" rel="noreferrer" className="twitterIcon"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink>
                <button className="vvd" onClick={() => setIsOpen(true)}><span>Visit my Blog</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    
  )
}

