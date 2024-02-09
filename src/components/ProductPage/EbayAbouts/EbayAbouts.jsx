import React from "react";
import "./eBayAbouts.css";

function EbayAbouts({ product }) {
  return (
    <div className="ebay-about-container">
      <div className="ebay-about-ul">
        <div className="ebay-aboutlne">
          <p>About</p>
        </div>
        <p>Shipping</p>
        <p>Reviews</p>
        <p>Returns</p>
      </div>
      <div className="ebay-about-title">
        <div className="about-imgs">
          <img
            width={"180px"}
            height={"140px"}
            src={product?.thumbnail}
            alt=""
          />
        </div>
        <div>
          <ul>
            <li>15 cm (6.1-inch) Super Retina XDR display</li>
            <li>
              Cinematic mode adds shallow depth of field and shifts focus
              automatically in your videos
            </li>
            <li>
              Advanced dual-camera system with 12MP Wide and Ultra Wide cameras;
              Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR
              recording
            </li>
            <li>
              12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
              recordingy
            </li>
            <li>15 cm (6.1-inch) Super Retina XDR display</li>
            <li>A15 Bionic chip for lightning-fast performance</li>
            <li>Up to 19 hours of video playback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default EbayAbouts;
