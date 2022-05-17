import React from "react";
import Image from "next/image";
import ControlButton from '../app/app-controls/app-control-button/ControlButton';

const cart = () => {
  return (
    <section className="cart">
      <div className="cart-left">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="cart-left-image">
                  <Image
                    src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </td>
              <td>
                <span className="cart-left-name">CORALZO</span>
              </td>
              <td>
                <span className="cart-left-extras">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="cart-left-price">$19.90</span>
              </td>
              <td>
                <span className="cart-left-quantity">2</span>
              </td>
              <td>
                <span className="cart-left-total">$39.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cart-left-image">
                  <Image
                    src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </td>
              <td>
                <span className="cart-left-name">CORALZO</span>
              </td>
              <td>
                <span className="cart-left-extras">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="cart-left-price">$19.90</span>
              </td>
              <td>
                <span className="cart-left-quantity">2</span>
              </td>
              <td>
                <span className="cart-left-total">$39.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cart-left-image">
                  <Image
                    src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </td>
              <td>
                <span className="cart-left-name">CORALZO</span>
              </td>
              <td>
                <span className="cart-left-extras">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="cart-left-price">$19.90</span>
              </td>
              <td>
                <span className="cart-left-quantity">2</span>
              </td>
              <td>
                <span className="cart-left-total">$39.80</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cart-left-image">
                  <Image
                    src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </td>
              <td>
                <span className="cart-left-name">CORALZO</span>
              </td>
              <td>
                <span className="cart-left-extras">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="cart-left-price">$19.90</span>
              </td>
              <td>
                <span className="cart-left-quantity">2</span>
              </td>
              <td>
                <span className="cart-left-total">$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-right">
        <div className="cart-right-wrapper">
          <h2 className="cart-right-title">Cart total</h2>
          <div className="cart-right-text">
            <b>Subtotal:</b>$79.60
          </div>
          <div className="cart-right-text">
            <b>Discount:</b>$0.00
          </div>
          <div className="cart-right-text">
            <b>Total:</b>$79.60
          </div>
          <ControlButton className={'btn-secondary cart-right-btn'} width={`100%`}>
              Checkout now!
          </ControlButton>
        </div>
      </div>
    </section>
  );
};

export default cart;
