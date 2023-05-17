import { Box, Grid } from "@mui/material";

const FUNDAMENTAL_RATIO_DETAILS = [
  {
    placeholder: "P/E Ratio",
  },
  {
    placeholder: "P/E Ratio",
  },
  {
    placeholder: "P/E Ratio",
  },
  {
    placeholder: "P/E Ratio",
  },
  {
    placeholder: "P/E Ratio",
  },
  {
    placeholder: "P/E Ratio",
  },
];

const FundamentalSection = () => {
  return (
    <Box p={3} pl={"8%"} pr={"8%"} pt={0} m={3} width={550}>
      <Box color="#480283" fontFamily={"Garet Heavy"} fontSize={24}>
        Fundamental Ratios
      </Box>
      <Box pt={1} fontSize={12} color="#1B0041">
        Investing can be a daunting task, but it doesn't have to be. With
        Investor's Edge, you can get the edge you need to win in the stock
        market.
      </Box>
      <Grid container lg={12} item pt={2}>
        {FUNDAMENTAL_RATIO_DETAILS.map((i) => (
          <Grid
            key={i.placeholder}
            pt={2}
            fontFamily={"Garet Book"}
            fontSize={12}
            item
            lg={6}
            sm={6}
            xs={6}
          >
            <Box pb={1} color="#1B0041" fontWeight={900}>
              {i.placeholder}
            </Box>
            <input
              style={{
                marginLeft: -10,
                borderRadius: 20,
                padding: 15,
                width: 200,
                backgroundColor: "rgba(72, 2, 131, 0.05)",
                border: "none",
                color: "#1B0041",
                fontFamily: "Garet Book",
              }}
              type="string"
            ></input>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FundamentalSection;
