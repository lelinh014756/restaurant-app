import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer height-content">
      <div className="footer-item">
        <div className="footer-item-background">
          <Image
            src="https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="background-footer"
            priority
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-item-card">
          <h3 className="footer-item-motto">
            Oh yes, We did. The Gericht Restaurant, Well Backend slice of
            Restaurant.
          </h3>
        </div>
        <div className="footer-item-card">
          <h2 className="footer-item-title">Find our Restaurant</h2>
          <p className="footer-item-text">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footer-item-text">
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footer-item-text">
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footer-item-text">
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
        </div>
        <div className="footer-item-card">
          <h2 className="footer-item-title">Working Hours</h2>
          <p className="footer-item-text">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className="footer-item-text">
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
