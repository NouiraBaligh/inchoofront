import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Products from "../components/Products";
import BannerPromoOne from "../components/BannerPromoOne";
import BannerPromoTwo from "../components/BannerPromoTwo";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerPromoOne />
      {/* <Category /> */}
      <Products />
      <BannerPromoTwo />
    </div>
  );
};

export default Home;
