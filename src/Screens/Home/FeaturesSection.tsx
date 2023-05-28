import { Box } from "@mui/material";

const FeaturesSection = () => {
  return (
    <Box
      p={8}
      sx={{
        backgroundColor: "#3C026D",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        color="#D4B5FF"
        fontFamily="Garet Heavy"
        fontSize={24}
        letterSpacing={0.8}
      >
        Features
      </Box>
      <br />
      <Box color="white" px={"25%"} letterSpacing={0.6} fontSize={12}>
        Investing can be a daunting task, but it doesn't have to be. With
        Investor's Edge, you can get the edge you need to win in the stock
        market.
        <Box
          pt={3}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          rowGap={3}
          columnGap={3}
          justifyContent={"center"}
        >
          {FEATURE_ITEMS.map((i) => (
            <div
              key={i.name}
              style={{
                borderRadius: 30,
                fontSize: 12,
                backgroundColor: "#1B0041",
                color: "white",
                padding: "2.2%",
                width: "40%",
                cursor: "pointer",
              }}
            >
              {i.name}
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const FEATURE_ITEMS = [
  {
    name: "Investment Tracking",
    url: "",
  },
  {
    name: "Porfolio Management",
    url: "",
  },
  {
    name: "Stock Picking",
    url: "",
  },
  {
    name: "Curated latest news",
    url: "",
  },
];

export default FeaturesSection;
