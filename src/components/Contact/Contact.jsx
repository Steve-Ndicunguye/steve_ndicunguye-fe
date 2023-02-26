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
  const [formData, setFormData] = useState({
  user_firstName: '',
  user_lastName: '',
  user_email: '',
  user_phoneNumber: '',
  message: ''
});

const [formErrors, setFormErrors] = useState({
  user_firstName: '',
  user_lastName: '',
  user_email: '',
  user_phoneNumber: '',
  message: ''
});

  const form = useRef()

  const closePopup = () => {
    setIsOpen(false);
    clearForm();
  };
  
  const clearForm = () => {
    setFormData({
      user_firstName: '',
      user_lastName: '',
      user_email: '',
      user_phoneNumber: '',
      message: ''
    });
  };

  let isValid
  const validateForm = () => {
    let errors = {};
    isValid = true;
    
    // Validate First Name
    if (formData.user_firstName.trim() === '') {
      errors.user_firstName = 'Please enter your first name!';
      isValid = false;
    }
  
    // Validate Last Name
    if (formData.user_lastName.trim() === '') {
      errors.user_lastName = 'Please enter your last name!';
      isValid = false;
    }
  
    // Validate Email Address
    if (!formData.user_email.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.user_email = 'Please enter a valid email address!';
      isValid = false;
    }

    // Validate Phone number
    if (!formData.user_phoneNumber.trim().match(/^\+?\d{10,}$/)) {
      errors.user_phoneNumber = 'Please enter a valid phone number!';
      isValid = false;
    }
  
    // Validate Message
    if (formData.message.trim() === '') {
      errors.message = 'Please enter your message!';
      isValid = false;
    }
  
    setFormErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setButtonText('Sending...');
      emailjs.sendForm('service_a635f9k', 'template_brj0cpf', form.current, 'ezr0s7-hsaD06nARD')
        .then((result) => {
          console.log(result.text);
          setIsOpen(true);
          setButtonText('Send')
        }, (error) => {
          console.log(error.text);
        });
    }
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
                      <input
                        type="text"
                        placeholder="First Name"
                        name="user_firstName"
                        value={formData.user_firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, user_firstName: e.target.value })
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            user_firstName: undefined,
                          }));
                      }}
                      />
                      {formErrors.user_firstName && <div className="error">{formErrors.user_firstName}</div>}

                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="user_lastName"
                        value={formData.user_lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, user_lastName: e.target.value });
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            user_lastName: undefined,
                          }));
                        }}
                      />
                      {formErrors.user_lastName && <div className="error">{formErrors.user_lastName}</div>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="user_email"
                        value={formData.user_email}
                        onChange={(e) => {
                          setFormData({ ...formData, user_email: e.target.value });
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            user_email: undefined,
                          }));
                      }}
                      />
                      {formErrors.user_email && <div className="error">{formErrors.user_email}</div>}
                      
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        placeholder="Phone No."
                        name="user_phoneNumber"
                        value={formData.user_phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, user_phoneNumber: e.target.value });
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            user_phoneNumber: undefined,
                          }));
                        }}
                      />
                      {formErrors.user_phoneNumber && <div className="error">{formErrors.user_phoneNumber}</div>}
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea 
                      rows="6"  
                      placeholder="Message" 
                      name="message"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setFormErrors((prevErrors) => ({
                          ...prevErrors,
                          message: undefined,
                        }));
                      }}
                      ></textarea>
                      {formErrors.message && <div className="error">{formErrors.message}</div>}
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>

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