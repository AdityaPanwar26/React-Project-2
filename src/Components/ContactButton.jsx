import React from "react";

const ContactButton=()=> {
  return (
    <>
      <div className="contact-button">
        <button className="contact-button">
          <span className="button-icon">💬</span> VIA SUPPORT CHAT
        </button>
        <button className="contact-button">
          <span className="button-icon">📞</span> VIA CALL
        </button>
      </div>
      <button className="email-form-button">
        <span className="button-icon">💬</span> VIA EMAIL FORM
      </button>
    </>
  );
}

export default ContactButton;