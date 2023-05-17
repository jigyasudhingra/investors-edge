import { Box, Button } from "@mui/material";

const NEWS_DETAILS = [
  {
    news: "Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win int ",
    date: "14th May, 2023",
    url: "",
  },
  {
    news: "Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win int ",
    date: "14th May, 2023",
    url: "",
  },
  {
    news: "Investing can be a daunting task, but it doesn't have to be. With Investor's Edge, you can get the edge you need to win int ",
    date: "14th May, 2023",
    url: "",
  },
];

const NewsCard = () => {
  return (
    <Box
      width={500}
      sx={{
        backgroundColor: "rgba(72, 2, 131, 0.05)",
        borderRadius: 5,
        padding: 3,
        fontSize: 12,
      }}
      color="#1B0041"
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        mb={2}
        px={2}
      >
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
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
          <Box fontWeight={900} letterSpacing={0.5}>
            AAPL, Inc.
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box>Price</Box>
          <Box fontWeight={900}>$ 1345.67</Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2} fontSize={12}>
        {NEWS_DETAILS.map((i) => (
          <Box
            sx={{
              backgroundColor: "rgba(72, 2, 131, 0.05)",
              borderRadius: 8,
              padding: 3,
            }}
          >
            <Box>{i.news}</Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              mt={1.3}
              color="#58187B"
            >
              <Box>{i.date}</Box>
              <Box>View More</Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display={"flex"} fontSize={12}>
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

export default NewsCard;
