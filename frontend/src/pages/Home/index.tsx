import React, { FC, useState } from "react";
import Header from "../../components/Header";
import Sidepanel from "../../components/Sidepanel";
import OpenChat from "../../components/OpenChat";

const Home: FC = () => {
  const [isOn, setIsOn] = useState<boolean>(true);

  return (
    <>
      <Header />
      <Sidepanel isOn={isOn} setIsOn={setIsOn}/>

      <OpenChat isOn={isOn} setIsOn={setIsOn}/>
    </>
  );
};

export default Home;
