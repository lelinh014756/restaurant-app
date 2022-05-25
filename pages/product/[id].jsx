import React, { useState } from "react";
import Image from "next/image";
import ControlButton from "../../app/app-controls/app-control-button/ControlButton";
import axios from "axios";
// Hook Import
import { useDispatch } from "react-redux";
// Redux Import
import { cartAddAction } from "../../utils/redux/actions/cartActions";

const sizes = ["M", "L", "XL"];

const Product = ({ food }) => {
  // Hook
  const [price, setPrice] = useState(food.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (n) => {
    setPrice(price + n);
  };

  const HandleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      setExtras((prev) => [...prev, option]);
      changePrice(option.price);
    } else {
      setExtras(extras.filter((extras) => extras._id !== option._id));
      changePrice(-option.price);
    }
  };

  const HandleSize = (sizeIndex) => {
    const difference = food.prices[sizeIndex] - food.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const HandleAddCart = () => {
    dispatch(
      cartAddAction({
        ...food,
        extras,
        price,
        quantity,
      })
    );
  };
  return (
    <div className="product">
      <div className="product-image">
        <div className="product-image-wrapper">
          <Image
            src={food.img}
            alt={food.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="product-information">
        <h1 className="product-information-name">{food.title}</h1>
        <span className="product-information-price">${price}</span>
        <p className="product-information-desc">{food.desc}</p>
        <h3 className="product-information-choose">Choose the size</h3>
        <ul className="product-information-sizes">
          {sizes.length !== 0
            ? sizes.map((size, index) => (
                <li
                  key={index}
                  className="product-information-size"
                  onClick={() => HandleSize(index)}
                >
                  {size}
                </li>
              ))
            : ""}
        </ul>
        <h3 className="product-information-choose">
          Choose additional ingredients
        </h3>
        <div className="product-information-ingredients">
          {food.extraOptions.length !== 0
            ? food.extraOptions.map((option) => (
                <div className="product-information-option" key={option._id}>
                  <input
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    className="product-information-checkbox"
                    onChange={(e) => HandleChange(e, option)}
                  />
                  <label htmlFor="double">{option.text}</label>
                </div>
              ))
            : ""}
        </div>
        <div className="product-information-actions">
          <input
            type="number"
            min='1'
            value={quantity}
            className="product-information-quantity input"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <ControlButton className={"btn-primary"} onClick={HandleAddCart}>
            Add to cart
          </ControlButton>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      food: res.data,
    },
  };
};
