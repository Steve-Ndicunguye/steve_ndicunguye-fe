import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/hireMe.png";
import { PopupBox }from "../PopupBox/PopupBox";
import 'animate.css';
import './Contact.css'
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef()

  const closePopup = () => {
    setIsOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a635f9k', 'template_brj0cpf', form.current, 'ezr0s7-hsaD06nARD')
      .then((result) => {
          console.log(result.text);
          setIsOpen(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <h2>Fill the form below to hire me</h2> */}
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" name="user_firstName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" name="user_lastName"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" name="user_email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name="user_phoneNumber"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name="message"></textarea>
                      <button type="submit" onClick={() =>  setButtonText('Sending...')}><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
                <PopupBox isOpen={isOpen} onClose={closePopup} />
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}