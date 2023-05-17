import { Box, Button } from "@mui/material";

const WatchlistedStockCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(72, 2, 131, 0.1)",
        borderRadius: 8,
        width: 350,
      }}
      p={2}
      pt={3}
      pb={3}
    >
      <Box display={"flex"} justifyContent={"space-around"}>
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
        <Button
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
        </Button>
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
            fontFamily: "Garet Book",
            "&:hover": { backgroundColor: "rgba(255, 49, 49, 0.3)" },
          }}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default WatchlistedStockCard;
