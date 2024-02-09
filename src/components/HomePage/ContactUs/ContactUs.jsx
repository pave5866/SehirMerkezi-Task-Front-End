import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="Contact">

      <div className="containerr">
        <div className="contact-img">
          <div>
            <img src="Contact1.png" className="img1" alt="" />
            <img src="Contact3.png" className="img3" alt="" />
          </div>
          <div>
            <img src="Contact2.png" className="img2" alt="" />
            <img src="Contact4.png" className="img4" alt="" />
          </div>
        </div>
        <div className="contact-text">
        <h2 className="contact-title">Contact Us</h2>
         <p className="contact-desc">Our team would love to hear from you!</p>
          <div className="form">
            <div className="namefield">
              <input
                type="text"
                className="first-name"
                placeholder="First Name"
              />
              <input
                type="text"
                className="last-name"
                placeholder="Last Name"
              />
              
            </div>

            <input type="text" placeholder="Email Address" className="email" />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="messagetxt"
              rows={15}
            ></textarea>
            <button className="sendbtn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
