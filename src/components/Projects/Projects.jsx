import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import { FiExternalLink } from "react-icons/fi"
import 'animate.css';
import './Projects.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [clientsProjects, setClientsProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    const clientsProjectsQuery = '*[_type == "clientsProjects"]';
    const personalProjectsQuery = '*[_type == "personalProjects"]';

    client.fetch(clientsProjectsQuery).then((data) => {
      setClientsProjects(data);
    });

    client.fetch(personalProjectsQuery).then((data) => {
      setPersonalProjects(data);
    });
  }, []);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">For Clients</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="projectsGrid">
                        {
                          clientsProjects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4} key = {index}>
                                <div className="proj-imgbx">
                                  <img src={urlFor(project.imgUrl)} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <a href={project.projectLink} target="__blank"> <button className="liveDemoButton">Live Demo <FiExternalLink className="liveDemoIcon"/></button> </a>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row className="projectsGrid">
                        {
                          personalProjects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4} key = {index}>
                                <div className="proj-imgbx">
                                  <img src={urlFor(project.imgUrl)} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <a href={project.githubLink} className="githubLink" target="__blank" style={{marginRight: '20px'}}> <button className="liveDemoButton">Github <FiExternalLink className="liveDemoIcon"/></button> </a>
                                    <a href={project.projectLink} target="__blank"> <button className="liveDemoButton">Live Demo <FiExternalLink className="liveDemoIcon"/></button> </a>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}