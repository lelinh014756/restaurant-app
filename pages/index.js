import Head from "next/head";
import AppFeatured from "../app/app-featured/AppFeatured";
import AppKnife from "../app/app-home/app-knife/AppKnife";
import AppBookTable from "../app/app-home/app-bookTable/AppBookTable";
import AppFoodList from "../app/app-food/app-food-list/AppFoodList";
import axios from "axios";
import Link from "next/dist/client/link";
import { useState } from "react";

export default function Home({ FoodList }) {
  return (
    <div className="home">
      <Head>
        <title>Restaurant in Nha Trang</title>
        <meta name="description" content="Best Restaurant in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppFeatured />
      <AppKnife />
      <AppBookTable />
      <div className="home-listMenu">
        <div className="home-listMenu-wrapper">
          <div className="home-listMenu-item active">
            <Link href='#' >Bar Menu</Link>
          </div>
          <div className="home-listMenu-item">
            <Link href='#' >Food Menu</Link>
          </div>
          <div className="home-listMenu-item">
            <Link href='#' >Food Menu</Link>
          </div>
        </div>
      </div>
      {/* <AppFoodList FoodList={FoodList} /> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      FoodList: res.data,
    },
  };
};
