import { Box, Button } from "@mui/material";
import React from "react";

const PortfolioStockCards = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(72, 2, 131, 0.1)",
        borderRadius: 8,
        width: 450,
      }}
      //   mt={2}
      p={2}
      pt={3}
      alignSelf={"center"}
      pb={3}
    >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        textAlign={"center"}
      >
        <Box
          sx={{
            backgroundColor: "rgba(48, 20, 100, 0.18)",
            borderRadius: 30,
            padding: 1,
            width: 27,
            marginLeft: -0.2,
          }}
        >
          <img
            src="https://media-public.canva.com/MADnA0CVzaE/1/thumbnail.png"
            alt="vwesrgv"
            width={20}
          />
        </Box>
        <Box color="#301464">
          <Box fontSize={12}>Name</Box>
          <Box fontSize={12} fontWeight={900}>
            AAPL, Inc.
          </Box>
        </Box>
        <Box color="#301464">
          <Box fontSize={12}>Name</Box>
          <Box fontSize={12} fontWeight={900}>
            AAPL, Inc.
          </Box>
        </Box>
        <Box color="#301464">
          <Box fontSize={12}>Name</Box>
          <Box fontSize={12} fontWeight={900}>
            AAPL, Inc.
          </Box>
        </Box>
        <Box color="#301464">
          <Box fontSize={12}>Name</Box>
          <Box fontSize={12} fontWeight={900}>
            AAPL, Inc.
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} pl={2} fontSize={12}>
        <Box width="100%">
          <Button
            sx={{
              width: 50,
              backgroundColor: "rgba(0, 191, 99, 0.1)",
              borderRadius: 30,
              textDecoration: "none",
              color: "#58187B",
              textTransform: "capitalize",
              fontSize: 12,
              padding: 0.7,
              marginTop: 2,
              fontFamily: "Garet Book",
              "&:hover": { backgroundColor: "rgba(0, 191, 99, 0.3)" },
            }}
          >
            Buy
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(255, 49, 49, 0.1)",
              width: 50,
              borderRadius: 30,
              textDecoration: "none",
              color: "#58187B",
              textTransform: "capitalize",
              fontSize: 12,
              padding: 0.7,
              marginTop: 2,
              marginLeft: 1,
              fontFamily: "Garet Book",
              "&:hover": { backgroundColor: "rgba(255, 49, 49, 0.3)" },
            }}
          >
            Sell
          </Button>
        </Box>
        <Box width="100%" textAlign={"right"} pr={2}>
          <Button
            sx={{
              width: 140,
              backgroundColor: "rgba(72, 2, 131, 0.1)",
              borderRadius: 30,
              textDecoration: "none",
              color: "#58187B",
              textTransform: "capitalize",
              fontSize: 12,
              padding: 0.7,
              marginTop: 2,
              fontFamily: "Garet Book",
              "&:hover": { backgroundColor: "rgba(72, 2, 131, 0.3)" },
            }}
          >
            Add to watchlist
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioStockCards;
