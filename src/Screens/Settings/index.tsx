import React from "react";
import Broker from "./Broker";
import FundamentalSection from "./FundamentalSection";
import TechnicalSection from "./TechnicalSection";

const Settings = () => {
  return (
    <div
      style={{
        paddingTop: 130,
        backgroundColor: "#EDE0FF",
      }}
    >
      <Broker />
      <FundamentalSection />
      <TechnicalSection />
    </div>
  );
};

export default Settings;
