import { Box, Button } from "@mui/material";
import WatchlistedStockCard from "./WatchlistedStockCard";

const WatchList = () => {
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
          Watchlisted Stocks
        </Box>
        <Box pt={1} fontSize={12}>
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
        >
          <WatchlistedStockCard />
          <WatchlistedStockCard />
          <WatchlistedStockCard />
          <WatchlistedStockCard />
        </Box>
        <Button
          sx={{
            backgroundColor: "rgba(27, 0, 65, 0.85)",
            borderRadius: 30,
            textDecoration: "none",
            color: "white",
            textTransform: "capitalize",
            fontSize: 12,
            padding: 1.5,
            paddingLeft: 3,
            paddingRight: 3,
            marginTop: 5,
            fontFamily: "Garet Book",
            "&:hover": { backgroundColor: "rgba(27, 0, 65, 0.95)" },
          }}
        >
          Add new stock
        </Button>
      </Box>
    </div>
  );
};

export default WatchList;
