import React from "react";
import Image from "next/image";
import Link from "next/link";

const AppFoodCard = ({ food }) => {
  return (
    <div className="app-food-card">
      <Link href={`/product/${food._id}`}>
        <div className="app-food-card-img">
          <Image
            src={food.img}
            alt="food"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
      </Link>
      <h2 className="app-food-card-title">{food.title}</h2>
      <span className="app-food-card-price">${food.prices[0]}</span>
      <p className="app-food-card-desc">{food.desc}</p>
    </div>
  );
};

export default AppFoodCard;
