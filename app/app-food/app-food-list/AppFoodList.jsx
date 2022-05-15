import React from "react";
import AppFoodCard from "../app-food-card/AppFoodCard";

const AppFoodList = () => {
  return (
    <div className="app-food-list">
      <h1>The best food in town</h1>
      <p className="app-food-list-desc">
        Welcome to GERICHT restaurant! The location of the royal culinary
        paradise. With unique flavors, along with beautiful luxurious scenery,
        will definitely bring a great experience for you.
      </p>
      <div className="app-food-list-wrapper">
          <AppFoodCard />
          <AppFoodCard />
          <AppFoodCard />
          <AppFoodCard />
          <AppFoodCard />
          <AppFoodCard />
      </div>
    </div>
  );
};

export default AppFoodList;
