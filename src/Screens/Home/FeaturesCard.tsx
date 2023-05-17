import { Box, Button } from "@mui/material";

interface FeatureCardProps {
  backgroundColor: string;
  cardColor: string;
  title: string;
  description: string;
  imgURL: string;
  buttonText: string;
  buttonURL?: string;
  left: boolean;
}

const FeaturesCard = (props: FeatureCardProps) => {
  const {
    backgroundColor,
    cardColor,
    title,
    description,
    imgURL,
    buttonText,
    buttonURL,
    left,
  } = props;
  return (
    <Box
      p="5%"
      sx={{
        backgroundColor: backgroundColor,
      }}
    >
      <Box
        sx={{
          backgroundColor: cardColor,
          borderRadius: 8,
        }}
        display="flex"
        flexDirection={left ? "row-reverse" : "row"}
      >
        <Box width="100%" p="4%" px={"5%"} alignSelf={"center"}>
          <Box
            fontFamily={"Garet Heavy"}
            fontSize={24}
            letterSpacing={1.1}
            color="#D4B5FF"
          >
            {title}
          </Box>
          <br />
          <Box
            dangerouslySetInnerHTML={{ __html: description }}
            color="white"
            fontSize={12}
            letterSpacing={0.5}
          ></Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "rgba(161, 0, 248, 0.5)",
                borderRadius: 30,
                textDecoration: "none",
                color: "white",
                textTransform: "capitalize",
                fontSize: 13,
                padding: 1,
                paddingLeft: 4,
                marginTop: 3,
                fontFamily: "Garet Book",
                paddingRight: 4,
                "&:hover": { backgroundColor: "rgba(161, 0, 248, 0.8)" },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
        <Box width="100%">
          <img
            src={imgURL}
            alt={title}
            style={{
              borderTopRightRadius: left ? 0 : 20,
              borderBottomRightRadius: left ? 0 : 20,
              borderTopLeftRadius: left ? 20 : 0,
              borderBottomLeftRadius: left ? 20 : 0,
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesCard;
