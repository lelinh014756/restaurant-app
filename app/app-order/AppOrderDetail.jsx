import React, { useState } from "react";
import ControlText from "../app-controls/app-control-input/ControlText";
import ControlTextarea from "../app-controls/app-control-input/ControlTextarea";
import ControlButton from "../app-controls/app-control-button/ControlButton";

const AppOrderDetail = ({ total, createOrder }) => {
  const [data, setData] = useState({});
  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    createOrder({
      customer: data.customer,
      address: data.address,
      total: total,
      method: 0,
    });
  };
  return (
    <div className="app-order-detail">
      <div className="app-order-detail-wrapper">
        <h1 className="app-order-detail-title">
          You will pay $12 after delivery
        </h1>
        <form onSubmit={HandleSubmit} className="app-order-detail-from">
          <div className="app-order-detail-from-group">
            <label>Name Surname</label>
            <ControlText
              placeholder={"John Doe"}
              onChange={(e) => HandleChange(e)}
              name={"customer"}
            />
          </div>
          <div className="app-order-detail-from-group">
            <label>Phone Number</label>
            <ControlText placeholder={"+1 234 567 89"} />
          </div>
          <div className="app-order-detail-from-group">
            <label>Address</label>
            <ControlTextarea
              placeholder={"Elton St. 505 NY"}
              row={"5"}
              name={"address"}
              onChange={(e) => HandleChange(e)}
            />
          </div>
          <ControlButton className={"btn-teal"}>Order</ControlButton>
        </form>
      </div>
    </div>
  );
};

export default AppOrderDetail;
