import { Box } from "@mui/material";
import React, { useContext } from "react";
import PortfolioStockCards from "./PortfolioStockCards";
import { UserContext } from "../../Contexts/UserContext";

const Portfolio = () => {
  const { userInfo }: any = useContext(UserContext);
  const stocksInfo = userInfo.user.scrips;
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
          {stocksInfo.map((i: any) => (
            <PortfolioStockCards key={i.metadata.name} stockInfo={i} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Portfolio;
