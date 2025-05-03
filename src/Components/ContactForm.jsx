import React from "react";

const ContactForm=()=> {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" className="form-input" />
      <input type="email" placeholder="E-Mail" className="form-input" />
      <textarea placeholder="Text" rows="4" className="form-textarea"></textarea>
      <button type="submit" className="submit-button">
        SUBMIT
      </button>
    </form>
  );
}

export default ContactForm;