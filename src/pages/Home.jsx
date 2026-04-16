import React from "react";
import Hero from "../component/Hero";
import MobileProducts from "../component/MobileProducts";
import PromoCards from "../component/PromoCards";
import BonusBanner from "../component/BonusBanner";
import Guidance from "../component/Guidance";
import HelpFargo from "../component/HelpFargo";
import Communities from "../component/Communities";

const Home = () => {
  return (
    <div>
      <Hero />
      <MobileProducts />
      <PromoCards />
      <BonusBanner />
      <Guidance />
      <HelpFargo />
      <Communities />
    </div>
  );
};

export default Home;
