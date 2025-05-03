import React from "react";
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";
import "../App.css";

const ContactPage=()=> {
  return (
    <><Navigation/>
    <div className="contact-container">
      <div className="contact-grid">
        <div>
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-description">
            LET’S CONNECT: WE' RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A
            QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF
            THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
          </p>

          <ContactButton />
          <ContactForm />
        </div>

        
        <div className="contact-image-container">
          <img src="/service.png" alt="24/7 Service"className="contact-image"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactPage;