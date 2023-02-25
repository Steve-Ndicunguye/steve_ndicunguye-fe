import React from 'react'
import aboutImage from "../../assets/img/ndicunguye.jpg";
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {FiDownload} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import './About.css'

export const About = () => {
  return (
    <section className="About" id="about">
     <h2>About Me</h2>
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={aboutImage} alt="Steve Ndicunguye" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>4+ Years</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>50+ Worldwide</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>70+ Completed Projects</small>
          </article>
        </div>
        <p>
        My name is Steve Ndicunguye and I am a professional software developer.
        I have worked as a software developer for 4 years and have experience
        with a variety of programming languages and software development frameworks.
        I am a motivated and hard-working individual who is always looking to
        improve my skills and learn new technologies. I am a team player and
        have experience working on both small and large projects.
        I am confident in my ability to deliver high-quality results and am always
        willing to go the extra mile to ensure that my clients are satisfied.
        </p>
        <a href="#contact" className="download__button"><FiDownload className='download__icon'/>Download My CV</a>
      </div>
     </div>
    </section>
  )
}
