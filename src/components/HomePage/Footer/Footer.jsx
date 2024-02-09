import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_address">
          <img src="Logo.png" alt="" />
          <p>
            4517 Washington Ave. <br /> Manchester, Kentucky <br /> 39495
          </p>
        </div>
        <div className="footer_item">
          <h5>Quick Links</h5>
          <p>Gallery</p>
          <p>About Us</p>
          <p>Buy Online</p>
        </div>
        <div className="footer_item">
          <h5>Policy</h5>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer_item">
          <h5>Social</h5>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIN</p>
        </div>
      </div>
      <p className="cpy">Copyright ©2022 Zing Inc. All right reserved.</p>
    </footer>
  );
};

export default Footer;
