"use client";

import HomeCategories from "@components/HomeCategories";
import HomeHero from "@components/HomeHero";
import HomePromo from "@components/HomePromo";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomePromo />
      <HomeCategories />
    </>
  );
};

export default Home;
