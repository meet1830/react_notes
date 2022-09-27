import React from "react";
import "./Footer.css";
import { ReactComponent as Facebook } from "../UI/Icons/Facebook.svg";
import { ReactComponent as Twitter } from "../UI/Icons/Twitter.svg";
import { ReactComponent as Instagram } from "../UI/Icons/Instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="footer-header-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
            alt="plants grow people"
          />
          <span>plants grow people</span>
        </div>
        <div className="footer-header-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
            alt="plants grow people"
          />
          <span>plants grow people</span>
        </div>
        <div className="footer-header-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
            alt="plants grow people"
          />
          <span>plants grow people</span>
        </div>
        <div className="footer-header-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
            alt="plants grow people"
          />
          <span>plants grow people</span>
        </div>
        <div className="footer-header-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
            alt="plants grow people"
          />
          <span>plants grow people</span>
        </div>
        <div className="footer-header-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471"
            alt="plants grow people"
          />
          <span>plants grow people</span>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section footer-section-left">
          <div className="footer-section-column">
            <p className="footer-section-column-head">ABOUT US</p>
            <p>Our Story</p>
            <p>Contact Us</p>
            <p>Locate Stores</p>
          </div>
          <div className="footer-section-column">
            <p className="footer-section-column-head">CUSTOMER CARE</p>
            <p>Track Order</p>
            <p>Shipping Policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Refund policy</p>
          </div>
          <div className="footer-section-column">
            <p className="footer-section-column-head">OFFERS</p>
            <p>Plant Parent Club</p>
            <p>Ugaoo Coupons</p>
          </div>
        </div>
        <div className="footer-section footer-section-right">
          <div className="footer-section-column">
            <p className="footer-section-column-head">
              SIGN UP FOR OUR NEWSLETTER
            </p>
            For plant care tips, our featured plant of <br></br> the week,
            exclusive offers and discounts
            <p className="footer-section-column-head follow-us-container">
              FOLLOW US ON SOCIAL MEDIA
            </p>
            <div className="social-icons">
              <Facebook width="20px" />
              <Twitter width="20px" />
              <Instagram width="20px" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Made with 💚 by Meet</div>
    </div>
  );
}

export default Footer;
