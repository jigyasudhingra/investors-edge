import { Box, Button, alpha } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { updateInFirebase } from "../Portfolio/PortfolioStockCards";
import Loader from "../../Components/Loader";

const WatchlistedStockCard = ({ stockInfo }: any) => {
  const { userInfo, updateData }: any = useContext(UserContext);
  const { metadata } = stockInfo;
  const name = metadata.name;
  const currentPrice = metadata.live_price;
  const sector = metadata.sector;
  const [loading, setLoading] = useState(false);

  const removeFromWatchlist = async () => {
    setLoading(true);
    const updatedWatchlistedStock = userInfo.watchlistedStocks.filter(
      (i: any) => i.metadata.name !== name
    );

    const updatedUserInfo = {
      ...userInfo,
      watchlistedStocks: updatedWatchlistedStock,
    };
    await updateInFirebase(updatedUserInfo);
    await updateData(updatedUserInfo);
    setLoading(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(72, 2, 131, 0.1)",
        borderRadius: 8,
        width: 400,
      }}
      p={2}
      pt={3}
      pb={3}
    >
      {loading && <Loader />}
      <Box display={"flex"} justifyContent={"space-around"} px={3}>
        <Box color="#301464" width="50%">
          <Box fontSize={12}>Name</Box>
          <Box fontSize={12} fontWeight={900}>
            {name.length >= 25 ? name.substring(0, 15) + "..." : name}
          </Box>
        </Box>
        <Box color="#301464" width="25%">
          <Box fontSize={12}>Price</Box>
          <Box fontSize={12} fontWeight={900}>
            {currentPrice}
          </Box>
        </Box>
        <Box color="#301464" width="25%">
          <Box fontSize={12}>Sector</Box>
          <Box fontSize={12} fontWeight={900}>
            {sector}
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"right"} fontSize={12}>
        {/* <Button
          sx={{
            width: 110,
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
          View Report
        </Button> */}
        <Button
          sx={{
            backgroundColor: "rgba(255, 49, 49, 0.1)",
            width: 100,
            borderRadius: 30,
            textDecoration: "none",
            color: "#58187B",
            textTransform: "capitalize",
            fontSize: 12,
            padding: 0.7,
            marginTop: 2,
            marginLeft: 1.6,
            marginRight: 2,
            fontFamily: "Garet Book",
            "&:hover": { backgroundColor: "rgba(255, 49, 49, 0.3)" },
          }}
          onClick={() => removeFromWatchlist()}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default WatchlistedStockCard;
