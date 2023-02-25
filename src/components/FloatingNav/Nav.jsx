import React, { useState } from "react"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {GiGiftOfKnowledge} from "react-icons/gi"
import {BiMessageSquareDetail} from "react-icons/bi"
import './Nav.css'

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="floatingNav">
        <a href="#" onclick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
        <a href="#about" onclick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
        <a href="#skills" onclick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><GiGiftOfKnowledge /></a>
        <a href="#project" onclick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active': ''}><BiBook /></a>
        <a href="#connect" onclick={() => setActiveNav('#connect')} className={activeNav === '#connect' ? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}
