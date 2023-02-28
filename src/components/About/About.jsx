import React, { useState, useEffect } from 'react'
import { client } from '../../client';
import aboutImage from "../../assets/img/ndicunguye.png";
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {FiDownload} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import TrackVisibility from 'react-on-screen';
import './About.css'

export const About = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    const aboutQuery = '*[_type == "about"]';

    client.fetch(aboutQuery).then((data) => {
      setAbout(data[0]);
      console.log(data[0])
    });
    
  }, []);

  const downloadCV = (event) => {
    event.preventDefault();
  
    if (about && about.cvFile && about.cvFile.asset) {
      const cvAssetId = about.cvFile.asset._ref;
      client.fetch(`*[_id == "${cvAssetId}"][0].url`).then((url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('target', "__blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  return (
    <section className="About" id="about">
     <h2>About Me</h2>
     <div className="container about__container">
     <TrackVisibility>
     {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__zoomIn about__me" : "about__me"}>
          <div className="about__me-image">
            <img src={aboutImage} alt="Steve Ndicunguye" />
          </div>
        </div>}
      </TrackVisibility>

        <div className="about__content">
          <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn about__cards" : "about__cards"}>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>{about.yearsOfExperience}+ Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>{about.numberOfClients}+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>{about.numberOfProjects}+ Completed Projects</small>
            </article>
          </div>}
      </TrackVisibility>
          <p>
          My name is Steve Ndicunguye and I am a professional software developer.
          I have worked as a software developer for {about.yearsOfExperience} years and have experience
          with a variety of programming languages and software development frameworks.
          I am a motivated and hard-working individual who is always looking to
          improve my skills and learn new technologies. I am a team player and
          have experience working on both small and large projects.
          I am confident in my ability to deliver high-quality results and am always
          willing to go the extra mile to ensure that my clients are satisfied.
          </p>
          <a href="#" className="download__button" onClick={downloadCV}><FiDownload className="download__icon" />
            Download My CV
          </a>

        </div>
     </div>
    </section>
  )
}
