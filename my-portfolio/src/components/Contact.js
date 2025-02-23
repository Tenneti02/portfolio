import React from 'react';
import '../css/Section.css';

const Contact = () => {
  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Feel free to reach out to me for any questions or collaboration!</p>
      <div className="contact-form">
        <h3 className="contact-title">Email Me</h3>
        <form className="contact-form-content">
          <input type="email" placeholder="Your Email" className="contact-input" />
          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="text" placeholder="Subject" className="contact-input" />
          <textarea placeholder="Message" className="contact-textarea"></textarea>
          <div className="contact-terms">
            <input type="checkbox" id="terms" className="contact-checkbox" />
            <label htmlFor="terms" className="contact-terms-label">I agree with the Terms and Conditions</label>
          </div>
          <button type="submit" className="contact-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;