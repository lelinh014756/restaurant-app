import React from "react";
import Image from "next/image";
import ControlButton from "../../app/app-controls/app-control-button/ControlButton";
import axios from "axios";

const Order = ({order}) => {
  const status = order.status;
  const statusClass = (index) => {
    if (index - status < 1) {
      return " order-done";
    }
    if (index - status === 1) {
      return " order-inProgress";
    }
    if (index - status > 1) {
      return " order-undone";
    }
  };
  return (
    <div className="order">
      <div className="order-left">
        <div className="order-left-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="order-left-id">{order._id}</span>
                </td>
                <td>
                  <span className="order-left-name">{order.customer}</span>
                </td>
                <td>
                  <span className="order-left-address">{order.address}</span>
                </td>
                <td>
                  <span className="order-left-total">${order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="order-left-status">
          <div className={"order-left-status-item" + statusClass(0)}>
            <Image
              src="/images/statusImages/paid.png"
              width={30}
              height={30}
              alt=""
            />
            <span>Payment</span>
            <div className="order-left-status-check">
              <Image
                src="/images/statusImages/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={"order-left-status-item" + statusClass(1)}>
            <Image
              src="/images/statusImages/bake.png"
              width={30}
              height={30}
              alt=""
            />
            <span>Preparing</span>
            <div className="order-left-status-check">
              <Image
                src="/images/statusImages/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={"order-left-status-item" + statusClass(2)}>
            <Image
              src="/images/statusImages/bike.png"
              width={30}
              height={30}
              alt=""
            />
            <span>On the way</span>
            <div className="order-left-status-check">
              <Image
                src="/images/statusImages/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={"order-left-status-item" + statusClass(3)}>
            <Image
              src="/images/statusImages/delivered.png"
              width={30}
              height={30}
              alt=""
            />
            <span>Delivered</span>
            <div className="order-left-status-check">
              <Image
                src="/images/statusImages/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order-right">
        <div className="order-right-wrapper">
          <h2 className="order-right-title">Cart total</h2>
          <div className="order-right-text">
            <b>Subtotal:</b>${order.total}
          </div>
          <div className="order-right-text">
            <b>Discount:</b>$0.00
          </div>
          <div className="order-right-text">
            <b>Total:</b>${order.total}
          </div>
          <ControlButton className={"order-right-btn"} width={`100%`}>
            Paid
          </ControlButton>
        </div>
      </div>
    </div>
  );
};

export default Order;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/orders/${params.id}`
  );
  return {
    props: {
      order: res.data,
    },
  };
};