import React from "react";
import Image from "next/image";

const AppFoodCard = () => {
  return (
    <div className="app-food-card">
      <div className="app-food-card-img">
          <Image src='/images/fakeImagesFood/mafe-estudio-LV2p9Utbkbw-unsplash.jpg' alt="food" width='500' height='500' objectFit="cover" />
      </div>
      <h2 className="app-food-card-title">Fiori di zucca</h2>
      <span className="app-food-card-price">$19.90</span>
      <p className="app-food-card-desc">
        Fiori di Zucca with a unique taste. We invite you to enjoy.
      </p>
    </div>
  );
};

export default AppFoodCard;
