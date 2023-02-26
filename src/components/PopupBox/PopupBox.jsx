import React from 'react'
import successLogo from "../../assets/img/successLogo.png";
import "./PopupBox.css"

export const PopupBox = ({ isOpen, onClose }) => {
    const popupBoxClassNames = isOpen ? "popupBox open-popup" : "popupBox";
  
    return (
      <div className={popupBoxClassNames} id="popupBox">
        <img src={successLogo} alt="Email Sent" />
        <h2>Thank you!</h2>
        <p>Message received successfully! I will get in touch soon!</p>
        <button type="submit" className="cancel" onClick={onClose}>
          Ok
        </button>
      </div>
    );
  }
