import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ControlText from "../../app/app-controls/app-control-input/ControlText";
import ControlTextarea from "../../app/app-controls/app-control-input/ControlTextarea";
import ControlButton from "../app-controls/app-control-button/ControlButton";

const AppAdminAddProduct = ({ setShowModal }) => {
  const [data, setData] = useState({});
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const HandleChange = (e) => {
    if (e.target.type === "file") {
      return setData({ ...data, [e.target.name]: e.target.files[0] });
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const ChangeExtra = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const ChangeExtraOptions = () => {
    setExtraOptions([...extraOptions, extra]);
  };
  const ChangePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const HandleCreate = () => {
    console.log(data.img);
    const dataImage = new FormData();
    dataImage.append("file", data.img);
    dataImage.append("upload_preset", "restaurant");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/mernstack-app/image/upload",
        dataImage
      )
      .then((res) => {
        const resUrl = res.data.url;
        return {
          ...data,
          img: resUrl,
          prices,
          extraOptions,
        };
      })
      .then((res) => {
        return axios.post("http://localhost:3000/api/products", res);
       
      })
      .then((res) => {
        setShowModal(false)
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="app-admin-add-product">
      <div className="app-admin-add-product-modal">
        <span
          className="app-admin-add-product-modal-close"
          onClick={() => setShowModal(false)}
        >
          X
        </span>
        <h1>Add a new Product</h1>
        <div className="app-admin-add-product-modal-group">
          <label htmlFor="">Choose an image</label>
          <input type="file" name="img" onChange={HandleChange} />
        </div>
        <div className="app-admin-add-product-modal-group">
          <label htmlFor="">Title</label>
          <ControlText name={"title"} onChange={HandleChange} />
        </div>
        <div className="app-admin-add-product-modal-group">
          <label htmlFor="">Extra</label>
          <div className="app-admin-add-product-modal-group-extra">
            <ControlText
              name={"text"}
              placeholder={"Item"}
              className={"input-extra"}
              onChange={ChangeExtra}
            />
            <ControlText
              type={"number"}
              name={"price"}
              placeholder={"Price"}
              className={"input-extra"}
              onChange={ChangeExtra}
            />
            <ControlButton
              className={"btn-extra btn-primary"}
              onClick={ChangeExtraOptions}
            >
              Add
            </ControlButton>
          </div>
          <ul>
            {extraOptions.map((option, index) => (
              <li key={index}>{option.text}</li>
            ))}
          </ul>
        </div>
        <div className="app-admin-add-product-modal-group">
          <label htmlFor="">Prices</label>
          <div className="app-admin-add-product-modal-group-prices">
            <ControlText
              type={"number"}
              name={"prices"}
              placeholder={"Small"}
              className={"input-price"}
              onChange={(e) => ChangePrice(e, 0)}
            />
            <ControlText
              type={"number"}
              name={"prices"}
              placeholder={"Medium"}
              className={"input-price"}
              onChange={(e) => ChangePrice(e, 1)}
            />
            <ControlText
              type={"number"}
              name={"prices"}
              placeholder={"Large"}
              className={"input-price"}
              onChange={(e) => ChangePrice(e, 2)}
            />
          </div>
        </div>
        <div className="app-admin-add-product-modal-group">
          <label htmlFor="">Description</label>
          <ControlTextarea row={5} name={"desc"} onChange={HandleChange} />
        </div>
        <ControlButton className={"btn-primary"} onClick={HandleCreate}>
          Create
        </ControlButton>
      </div>
    </div>
  );
};

export default AppAdminAddProduct;
