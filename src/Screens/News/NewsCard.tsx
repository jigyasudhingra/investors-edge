import { Box, Button } from "@mui/material";

const NewsCard = ({ name, news, logo }: any) => {
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
              borderRadius: 50,
              padding: 0.5,
              width: 30,
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
              src={logo}
              alt="vwesrgv"
              width={30}
            />
          </Box>
          <Box fontWeight={900} letterSpacing={0.5}>
            {name}
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box>Price</Box>
          <Box fontWeight={900}>$ 1345.67</Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2} fontSize={12}>
        {news.articles.map((i: any) => (
          <Box
            key={i.content.substring(0, 30)}
            sx={{
              backgroundColor: "rgba(72, 2, 131, 0.05)",
              borderRadius: 8,
              padding: 3,
            }}
          >
            <Box>{i.content}</Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              mt={1.3}
              color="#58187B"
            >
              <Box>{new Date(i.publishedAt).toLocaleString()}</Box>
              <Box
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => (window.location.href = i.url)}
              >
                View More
              </Box>
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
