import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const updateInFirebase = async (userInfo: any) => {
  await setDoc(doc(db, "users", "jigyasudhingra@gmail.com"), userInfo);
};

const PortfolioStockCards = ({ stockInfo }: any) => {
  // --- Add To Watchlist ---
  const { userInfo, updateData }: any = useContext(UserContext);
  const addToWatchlist = async () => {
    const temp = {
      ...userInfo,
      watchlistedStocks:
        userInfo.watchlistedStocks?.length > 0
          ? [...userInfo.watchlistedStocks, stockInfo]
          : [stockInfo],
    };
    await updateInFirebase(temp);
    await updateData(temp);
    alert("Added successfully");
  };

  const { holdings, metadata } = stockInfo;
  const quantity = holdings.quantity;
  const name = metadata.name;
  const logoURL = metadata.logo;
  const currentPrice = metadata.live_price;
  const dayChange = metadata.day_change.toFixed(2);

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
          <Box fontSize={12} fontWeight={900}>
            {dayChange}
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
            onClick={() => addToWatchlist()}
          >
            Add to watchlist
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioStockCards;
