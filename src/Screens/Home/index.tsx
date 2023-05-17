import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FeaturesCard from "./FeaturesCard";

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
        imgURL="https://media-private.canva.com/R63fg/MAFjFbR63fg/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T220730Z&X-Amz-Expires=73101&X-Amz-Signature=c77570405c825354d1375a5499960e1170be82ba4035367144c2ae9b88741eb6&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2016%20May%202023%2018%3A25%3A51%20GMT"
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
