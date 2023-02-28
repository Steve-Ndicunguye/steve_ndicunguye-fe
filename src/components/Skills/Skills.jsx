import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import TrackVisibility from 'react-on-screen';
import './Skills.css';


export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className="Skills" id="skills">
      <h2 className="head-text">My Skills</h2>
      <TrackVisibility>
     {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__fadeIn app__skills-container" : "app__skills-container"}>
          <div className="app__skills-list">
            {skills.map((skill) => (
              <div
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </div>
            ))}
          </div>
          
        </div>}
      </TrackVisibility>
      </section>
  );
};
