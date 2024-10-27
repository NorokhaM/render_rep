import React, { FC, useState } from "react";
import Header from "../../components/Header";
import Sidepanel from "../../components/Sidepanel";
import OpenChat from "../../components/OpenChat";
import Hero from "../../components/Hero";
import TargetItems from "../../components/TargetItems";
import Products from "../../components/Products";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";

const Home: FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Sidepanel isOn={isOn} setIsOn={setIsOn}/>

      <Hero />
      
      <TargetItems />

      <Products />

      <Blog />

      <OpenChat isOn={isOn} setIsOn={setIsOn}/>
      
      <Footer />
    </>
  );
};

export default Home;
