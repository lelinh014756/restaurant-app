import React, { useState } from "react";
import Image from "next/image";
import ControlButton from '../../app/app-controls/app-control-button/ControlButton';

const Product = () => {
  const [size, setSize] = useState(0);
  const food = {
    id: 1,
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
    name: "Sandwich with boiled egg",
    sizes: ["M", "L", "XL"],
    price: [19.9, 23.9, 27.9],
    desc: "Hi! Welcome to Restaurant Gericht. The sandwich was designed to perfection. With an irresistible taste. Wishing you a delicious.",
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
        <h1 className="product-information-name">{food.name}</h1>
        <span className="product-information-price">${food.price[size]}</span>
        <p className="product-information-desc">{food.desc}</p>
        <h3 className="product-information-choose">Choose the size</h3>
        <ul className="product-information-sizes">
          {food.sizes.length !== 0
            ? food.sizes.map((size, index) => (
                <li
                  key={index}
                  className="product-information-size"
                  onClick={() => setSize(index)}
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
          <div className="product-information-option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="product-information-checkbox"
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="product-information-option">
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className="product-information-checkbox"
            />
            <label htmlFor="double">Extra Cheese</label>
          </div>
          <div className="product-information-option">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="product-information-checkbox"
            />
            <label htmlFor="double">Spicy Sauce</label>
          </div>
          <div className="product-information-option">
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className="product-information-checkbox"
            />
            <label htmlFor="double">Garlic Sauce</label>
          </div>
        </div>
        <div className="product-information-actions">
          <input
            type="number"
            defaultValue={1}
            className="product-information-quantity input"
          />
          <ControlButton className={'btn-primary'}>
              Add to cart
          </ControlButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
