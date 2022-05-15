import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <div className="footer-item-background">
          <Image
            src="https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="background-footer"
            priority
            objectFit="cover"
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-item-card">
          <div className="footer-item-motto"></div>
        </div>
        <div className="footer-item-card"></div>
        <div className="footer-item-card"></div>
      </div>
    </footer>
  );
};

export default Footer;
