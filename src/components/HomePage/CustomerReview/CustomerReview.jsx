import React from "react";
import "./customerReview.css";

const CustomerReview = () => {
  return (
    <div className="customer_container" id="Testimonial">
      <div>
        
      </div>
      <h3 className="title">What do customers say...</h3>

      <div className="contents-container">
        <div className="content_wrapper">
          <div className="img_container">
            <img src="reviewimg.png" alt="" />
            <img src="starr.png" className="star" alt="" />
          </div>
        </div>

        <div className="content">
          <img src="quote.png" alt="" />
          <p className="title-content">Amazing service</p>
          <p className="desc">
            Since the online marketplace can be a scary place,the <br />
            presence of customer reviews on an online store helps <br />{" "}
            establish authenticity, confidence, and trust among <br /> shoppers.
          </p>
          <div className="people">
            <p className="name">Wade Warren</p>
            <p className="job">Doctor</p>
          </div>

          <div className="arrows">
            <img src="arrow-circle-left.png" alt="" />
            <img src="arrow-circle-right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
