import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FeaturesCard from "./FeaturesCard";
import HOME1 from "../../assets/home1.webp";

const HomeScreen = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <FeaturesCard
        backgroundColor="#1B0041"
        title="Investment Tracking"
        description="Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market.. 
              <br /><br />Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market."
        imgURL={HOME1}
        cardColor="rgba(72, 2, 131, 0.37)"
        buttonText="Connect Broker"
        left={false}
      />
      <FeaturesCard
        backgroundColor="#480283"
        title="Portfolio Management"
        description="Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market.. 
              <br /><br />Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market.. "
        imgURL="https://media-public.canva.com/2dG18/MAFMwl2dG18/1/s.jpg"
        cardColor="#1B0041"
        buttonText="Connect Broker"
        left={true}
      />
      <FeaturesCard
        backgroundColor="#1B0041"
        title="Stock Picker"
        description="Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market.. 
              <br /><br />Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market."
        imgURL="	https://media-public.canva.com/ggkDg/MAEMpHggkDg/1/s.jpg"
        cardColor="rgba(72, 2, 131, 0.37)"
        buttonText="Get Started"
        left={false}
      />
      <FeaturesCard
        backgroundColor="#480283"
        title="Curated Latest News"
        description="Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market.. 
              <br /><br />Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win in the stock market.. "
        imgURL="https://media-public.canva.com/nSMlk/MAD8KVnSMlk/1/s.jpg"
        cardColor="#1B0041"
        buttonText="Connect Broker"
        left={true}
      />
    </div>
  );
};

export default HomeScreen;
