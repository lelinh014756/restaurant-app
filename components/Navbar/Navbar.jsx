import React from "react";
import Image from "next/image";
import IconCall from "../../public/icons/svg/IconCall.js";
import IconCart from "../../public/icons/svg/IconCart.js";
import Logo from "../../public/images/svg/Logo";
import Link from "next/link";
import IconSeparator from "../../public/icons/svg/IconSeparator";
import { quantityCart } from "../../utils/redux/selectors/cartSelector";
// Hook Import
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector(quantityCart);
  return (
    <nav className="navbar">
      <div className="navbar-item-logo">Gerícht</div>
      <ul className="navbar-item-list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>Products</li>
        <li>Menu</li>
        <li>Events</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-item-option">
        <div className="navbar-item-option-authentication">
          <Link href="/login">Log In </Link> /
          <Link href="/register"> Registration</Link>
        </div>
        <IconSeparator />
        <div className="navbar-item-option-table">
          <Link href="/book">Book Table</Link>
        </div>
        {false && (
          <Link href="/cart">
            <div className="navbar-item-option-cart">
              <i>
                <IconCart width={`30px`} height={`30px`} />
              </i>
              <div className="navbar-item-option-cart-counter">{quantity}</div>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
