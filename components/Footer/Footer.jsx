import React from "react";
import Image from "next/image";
import ControlButton from "../../app/app-controls/app-control-button/ControlButton";
import ControlText from "../../app/app-controls/app-control-input/ControlText";
import Logo from "../../public/images/svg/Logo";
import IconSpoonRow from "../../public/icons/svg/IconSpoonRow";
import IconFacebook from "../../public/icons/svg/IconFacebook";
import IconTwitter from "../../public/icons/svg/IconTwitter";
import IconInstagram from "../../public/icons/svg/IconInstagram";
import IconStick from "../../public/icons/svg/IconStick";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-form">
        <h4>Newsletter</h4>
        <IconSpoonRow />
        <h2>Subscribe to Our Newsletter</h2>
        <p>And never miss latest Updates!</p>
        <div className="footer-form-group">
          <ControlText placeholder={"Email Address"} />
          <ControlButton className={"btn-primary"}>Subscribe</ControlButton>
        </div>
      </div>
      <div className="footer-background">
        <div className="footer-info">
          <div className="footer-info-item">
            <h4>Contact Us</h4>
            <p>
              9 W 53rd St, New York, NY 10019, USA <br />
              <br />
              +8 437-298-8644 <br /> +1 212-555-1230
            </p>
          </div>
          <div className="footer-info-item mid">
            <h1>Gerícht</h1>
            <p>
              ”The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <IconSpoonRow />
            <ul className="footer-info-item-socials">
              <li>
                <IconFacebook />
              </li>
              <li>
                <IconTwitter />
              </li>
              <li>
                <IconInstagram />
              </li>
            </ul>
          </div>
          <div className="footer-info-item">
            <h4>Working Hours</h4>
            <p>
              Monday-Friday:
              <br />
              08:00 am -12:00 am <br /> <br /> Saturday-Sunday: <br />
              07:00am -11:00 pm
            </p>
          </div>
        </div>
        <p className="footer-copyright">2021 Gerícht. All Rights reserved.</p>
      </div>
      <div className="footer-tool">
        <IconStick />
        <p>Top</p>
      </div>
    </footer>
  );
};

export default Footer;
