import React from "react";
import Image from "next/image";
import ControlButton from "../app/app-controls/app-control-button/ControlButton";
import { cart } from "../utils/redux/selectors/cartSelector";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
// Component Import
import AppOrderDetail from "../app/app-order/AppOrderDetail";
// Hook Import
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// State Import
import { cartResetAction } from "../utils/redux/actions/cartActions";

{
  /* <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script> */
}

const Cart = () => {
  // Hook
  const listCart = useSelector(cart);
  console.log(listCart);
  const router = useRouter();
  const dispatch = useDispatch();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [cash, setCash] = useState(false);

  const addPaypalScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ATqmqHvyyoxHq2SciNviALjbt9R_ekcyuGNZAfFdRwc3CXfR3S6xo6AHZUYwVtpZIVIL84CHIot9efIS&disable-funding=credit,card";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  };

  const createOrder = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": "en-US",
      },
    };
    axios.post("http://localhost:3000/api/orders", data, config).then((res) => {
      res.status === 201 && router.push("/order/" + res.data._id);
      dispatch(cartResetAction());
    });
  };

  useEffect(() => {
    addPaypalScript();
  }, []);

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
          {listCart.products.length !== 0 ? (
            <tbody>
              {listCart.products.map((product, index) => {
                return (
                  <tr key={product._id + index.toString()}>
                    <td>
                      <div className="cart-left-image">
                        <Image
                          src={product.img}
                          alt=""
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                    </td>
                    <td>
                      <span className="cart-left-name">{product.title}</span>
                    </td>
                    <td>
                      <span className="cart-left-extras">
                        {product.extras.length !== 0
                          ? product.extras.map((extra, index) =>
                              index === product.extras.length - 1 ? (
                                <span key={extra._id}>{extra.text}</span>
                              ) : (
                                <span key={extra._id}>{extra.text}, </span>
                              )
                            )
                          : ""}
                      </span>
                    </td>
                    <td>
                      <span className="cart-left-price">{product.price}</span>
                    </td>
                    <td>
                      <span className="cart-left-quantity">
                        {product.quantity}
                      </span>
                    </td>
                    <td>
                      <span className="cart-left-total">
                        {product.price * product.quantity}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            ""
          )}
        </table>
      </div>
      <div className="cart-right">
        <div className="cart-right-wrapper">
          <h2 className="cart-right-title">Cart total</h2>
          <div className="cart-right-text">
            <b>Subtotal:</b>${listCart.total}
          </div>
          <div className="cart-right-text">
            <b>Discount:</b>$0.00
          </div>
          <div className="cart-right-text">
            <b>Total:</b>${listCart.total}
          </div>
          {scriptLoaded ? (
            <div className="cart-right-paymentMethods">
              <ControlButton
                className={"btn-pay cart-right-payButton"}
                width={`100%`}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </ControlButton>
              <PayPalButton
                amount={listCart.total}
                onSuccess={(details, data) => {
                  console.log(details);
                  createOrder({
                    customer:
                      details.payer.name.given_name +
                      " " +
                      details.payer.name.surname,
                    address: details.payer.address.address_line_1,
                    total: listCart.total,
                    method: 1,
                  });
                }}
              />
            </div>
          ) : (
            <ControlButton
              className={"btn-secondary cart-right-btn"}
              width={`100%`}
              onClick={() => setScriptLoaded(true)}
            >
              Checkout now!
            </ControlButton>
          )}
        </div>
      </div>
      {cash && (
        <AppOrderDetail total={listCart.total} createOrder={createOrder} />
      )}
    </section>
  );
};

export default Cart;
