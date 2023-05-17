import { Box, Button } from "@mui/material";
import React from "react";
import PortfolioStockCards from "./PortfolioStockCards";

const Portfolio = () => {
  return (
    <div
      style={{
        paddingTop: 130,
        backgroundColor: "#EDE0FF",
        minHeight: "100vh",
      }}
    >
      <Box p={3} m={3} px={8} width={"80%"}>
        <Box color="#480283" fontFamily={"Garet Heavy"} fontSize={24}>
          Portfolio
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={4} mt={4}>
          <PortfolioStockCards />
          <PortfolioStockCards />
          <PortfolioStockCards />
          <PortfolioStockCards />
          <PortfolioStockCards />
        </Box>
      </Box>
    </div>
  );
};

export default Portfolio;
