import React from 'react'
import attention from "../../assets/img/attention.png";
import "./PopupBox.css"

export const AwaitingBlog = ({ isOpen, onClose }) => {
    const popupBoxClassNames = isOpen ? "popupBox open-popup" : "popupBox";
  
    return (
      <div className={popupBoxClassNames} id="popupBox">
        <img src={attention} alt="Email Sent" />
        <h2>Sorry!</h2>
        <p>This page is still under construction!</p>
        <button type="submit" className="cancel" onClick={onClose}>
          Ok
        </button>
      </div>
    );
  }
