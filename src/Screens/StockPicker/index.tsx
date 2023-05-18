import { Box } from "@mui/material";
import React from "react";
import ChooseStocks from "./ChooseStocks";
import Result from "./Result";

const StockPicker = () => {
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
          Stock Picker
        </Box>
        <Box pt={1} fontSize={12} width={600}>
          Investing can be a daunting task, but it doesn't have to be. With
          Investor's Edge, you can get the edge you need to win in the stock
          market. Investing can be a daunting task, but it doesn't have to be.
          With Investor's Edge, you can get the edge you need to win in the
          stock market.
        </Box>
        <Box
          pt={4}
          display={"flex"}
          flexDirection={"row"}
          gap={5}
          flexWrap={"wrap"}
        ></Box>
        <ChooseStocks />
        <Result />
      </Box>
    </div>
  );
};

export default StockPicker;
