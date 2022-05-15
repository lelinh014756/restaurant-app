import React from "react";
import Image from "next/image";
import IconCall from "../../public/icons/svg/IconCall.js";
import IconCart from "../../public/icons/svg/IconCart.js";
import Logo from "../../public/images/svg/Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item-contact">
        <i>
          <IconCall width={`32px`} height={`32px`} />
        </i>
        <div className="navbar-item-contact-texts">
          <h4>ORDER NOW!</h4>
          <p>037 298 8644</p>
        </div>
      </div>
      <ul className="navbar-item-list">
        <li>Home</li>
        <li>Products</li>
        <li>Menu</li>
        <Logo width={`160px`} height={`69px`} />
        <li>Events</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-item-cart">
          <i>
            <IconCart width={`30px`} height={`30px`} />
          </i>
          <div className="navbar-item-cart-counter">2</div>
      </div>
    </nav>
  );
};

export default Navbar;
