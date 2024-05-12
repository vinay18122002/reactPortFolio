import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_desc">
        <div className="contact_desc_innerContainer">
          <h1 className="contact_heading">Contact Me</h1>
          <h3 className="contact_heading_desc">
            Let me know how can I help you. Send me your queries
          </h3>
        </div>
      </div>
      <div className="contact_box">
        <div className="contact_form">
          <h1 className="contact_form_heading">Let's Talk</h1>
          <form action="">
            <div className="input_name_div">
              <div className="first_name_div">
                <p>First Name: </p>
                <input type="text" className="input_labels" required />
              </div>
              <div className="last_name_div">
                <p>Last Name: </p>
                <input type="text" className="input_labels" required />
              </div>
            </div>

            <div className="email_phone_div">
              <div className="email_div">
                <p>Email : </p>
                <input type="email" className="input_labels" required />
              </div>
              <div className="phone_div">
                <p>Phone no:</p>
                <input type="number" className="input_labels" required />
              </div>
            </div>

            <div className="text_area_div">
              <div className="text_area_container">
                <p>Message</p>
                <textarea name="" id="" cols="61" rows="10" required></textarea>
              </div>
            </div>
            <button type="submit" className="button_submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
