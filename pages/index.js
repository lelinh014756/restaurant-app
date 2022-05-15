import Head from "next/head";
import AppFeatured from "../app/app-featured/AppFeatured";
import AppFoodList from "../app/app-food/app-food-list/AppFoodList";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Restaurant in Nha Trang</title>
        <meta name="description" content="Best Restaurant in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppFeatured />
      <AppFoodList />
    </div>
  );
}
