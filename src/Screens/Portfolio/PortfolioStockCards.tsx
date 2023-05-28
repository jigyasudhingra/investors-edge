import { Box, Button, alpha } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Loader from "../../Components/Loader";

export const updateInFirebase = async (userInfo: any) => {
  await setDoc(doc(db, "users", "jigyasudhingra@gmail.com"), userInfo);
};

const PortfolioStockCards = ({ stockInfo }: any) => {
  const { userInfo, updateData }: any = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const openPrompt = () => {
    setShowPrompt(true);
  };

  const addToBuyWatchlist = async () => {
    setShowPrompt(false);
    await addToWatchlist("BUY");
  };

  const addToSellWatchlist = async () => {
    setShowPrompt(false);
    await addToWatchlist("SELL");
  };

  const WatchlistPrompt = () => {
    return (
      <Box
        zIndex={10000}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: `100vh`,
          width: `100vw`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha("#000", 0.7),
        }}
        display="flex"
        flexDirection={"column"}
        width="100%"
        justifyContent="center"
      >
        <Box
          sx={{
            backgroundColor: "#645084",
          }}
          textAlign={"center"}
          p={5}
        >
          <Box color={"white"}>You want to add it for BUY/SELL?</Box>
          <Box display={"flex"} fontSize={12}>
            <Button
              sx={{
                width: 110,
                backgroundColor: "rgba(72, 2, 131, 0.7)",
                borderRadius: 30,
                textDecoration: "none",
                color: "white",
                textTransform: "capitalize",
                fontSize: 12,
                padding: 0.7,
                marginTop: 2,
                fontFamily: "Garet Book",
                "&:hover": { backgroundColor: "rgba(72, 2, 131, 0.3)" },
              }}
              onClick={addToBuyWatchlist}
            >
              BUY
            </Button>
            <Button
              sx={{
                backgroundColor: "rgba(255, 49, 49, 0.6)",
                width: 100,
                borderRadius: 30,
                textDecoration: "none",
                color: "white",
                textTransform: "capitalize",
                fontSize: 12,
                padding: 0.7,
                marginTop: 2,
                marginLeft: 1.6,
                fontFamily: "Garet Book",
                "&:hover": { backgroundColor: "rgba(255, 49, 49, 0.3)" },
              }}
              onClick={addToSellWatchlist}
            >
              SELL
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  // --- Add To Watchlist ---
  const addToWatchlist = async (purpose: any) => {
    for (let i = 0; i < userInfo.watchlistedStocks.length; i++) {
      if (
        stockInfo.metadata.name === userInfo.watchlistedStocks[i].metadata.name
      ) {
        alert("Already on the watchlist");
        return;
      }
    }
    const temp = {
      ...userInfo,
      watchlistedStocks:
        userInfo.watchlistedStocks?.length > 0
          ? [...userInfo.watchlistedStocks, { ...stockInfo, purpose }]
          : [{ ...stockInfo, purpose }],
    };
    setLoading(true);
    await updateInFirebase(temp);
    await updateData(temp);
    setLoading(false);
  };

  const { holdings, metadata } = stockInfo;
  const quantity = holdings.quantity;
  const name = metadata.name;
  const logoURL = metadata.logo;
  const currentPrice = metadata.live_price;
  const dayChange = metadata.day_change.toFixed(2);
  const chartURL =
    "https://www.tradingview.com/chart/2tMiKYh2/?symbol=NSE%3A" +
    metadata.symbol;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(72, 2, 131, 0.1)",
        borderRadius: 8,
        width: 450,
      }}
      p={2}
      pt={3}
      alignSelf={"center"}
      pb={3}
    >
      {showPrompt && <WatchlistPrompt />}
      {loading && <Loader />}

      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        textAlign={"center"}
        alignItems={"center"}
        width="100%"
      >
        <Box
          sx={{
            backgroundColor: "rgba(48, 20, 100, 0.18)",
            borderRadius: 50,
            padding: 0.5,
            width: "6.9%",
          }}
          display={"flex"}
          justifyContent={"space-around"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <img
            style={{
              borderRadius: 30,
            }}
            src={logoURL}
            alt="vwesrgv"
            width={30}
          />
        </Box>
        <Box color="#301464" width={"40%"}>
          <Box fontSize={12}>Name</Box>
          <Box fontSize={12} fontWeight={900}>
            {name.length >= 25 ? name.substring(0, 20) + "..." : name}
          </Box>
        </Box>
        <Box color="#301464" width={"10%"}>
          <Box fontSize={12}>Qty</Box>
          <Box fontSize={12} fontWeight={900}>
            {quantity}
          </Box>
        </Box>
        <Box color="#301464" width={"10%"}>
          <Box fontSize={12}>Price</Box>
          <Box fontSize={12} fontWeight={900}>
            {currentPrice}
          </Box>
        </Box>
        <Box color="#301464" width={"20%"}>
          <Box fontSize={12}>Day P/L</Box>
          <Box
            color={dayChange < 0 ? "red" : "green"}
            fontSize={12}
            fontWeight={900}
          >
            {(dayChange * quantity).toFixed(2)}
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
            onClick={() => (window.location.href = chartURL)}
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
            onClick={() => (window.location.href = chartURL)}
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
            onClick={openPrompt}
          >
            Add to watchlist
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioStockCards;
