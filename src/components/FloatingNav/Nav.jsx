import React, { useState, useEffect } from "react"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {GiGiftOfKnowledge} from "react-icons/gi"
import {BiMessageSquareDetail} from "react-icons/bi"
import Scrollspy from 'react-scrollspy'
import './Nav.css'

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const about = document.querySelector('#about');
        const skills = document.querySelector('#skills');
        const project = document.querySelector('#project');
        const connect = document.querySelector('#connect');

        if (scrollPosition >= connect.offsetTop - window.innerHeight / 2) {
          setActiveNav('#connect');
        } else if (scrollPosition >= project.offsetTop - window.innerHeight / 2) {
          setActiveNav('#project');
        } else if (scrollPosition >= skills.offsetTop - window.innerHeight / 2) {
          setActiveNav('#skills');
        } else if (scrollPosition >= about.offsetTop - window.innerHeight / 2) {
          setActiveNav('#about');
        } else {
          setActiveNav('#');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className="floatingNav">
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><GiGiftOfKnowledge /></a>
        <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active': ''}><BiBook /></a>
        <a href="#connect" onClick={() => setActiveNav('#connect')} className={activeNav === '#connect' ? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}
