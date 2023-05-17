import { Box, Button } from "@mui/material";
import React from "react";
import "./stockpicker.css";
const ChooseStocks = () => {
  return (
    <div>
      <Box color={"#480283"} fontSize={16} fontWeight={900} letterSpacing={0.5}>
        Choose Stocks
      </Box>
      <Box ml={-0.5} pt={1} display={"flex"}>
        <input
          style={{
            backgroundColor: "rgba(72, 2, 131, 0.17)",
            width: 300,
            border: "none",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            paddingLeft: 16,
            fontWeight: 900,
            fontFamily: "Garet Book",
            color: "#58187B",
          }}
          type="text"
        />
        <div
          style={{
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: "rgba(72, 2, 131, 0.17)",
            padding: 8,
            width: 32,
            textAlignLast: "center",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "rgba(72, 2, 131, 0.22)",
              borderRadius: 50,
              padding: 5,
            }}
          >
            <img
              src="https://media-public.canva.com/esBTg/MAEgJresBTg/1/tl.png"
              alt="regve"
              width="70%"
              style={{
                marginTop: 3,
              }}
            />
          </div>
        </div>
      </Box>
      <Box
        mt={3}
        ml={-0.5}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        width={320}
        gap={2}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={120}
          p={1}
          sx={{
            backgroundColor: "rgba(255, 49, 49, 0.1)",
            borderRadius: 20,
          }}
          px={2}
          alignItems={"center"}
        >
          <Box color={"#58187B"}>Google</Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
            fontSize={9}
          >
            ❌
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={120}
          p={1}
          sx={{
            backgroundColor: "rgba(255, 49, 49, 0.1)",
            borderRadius: 20,
          }}
          px={2}
          alignItems={"center"}
        >
          <Box color={"#58187B"}>Google</Box>
          <Box fontSize={9}>❌</Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={120}
          p={1}
          sx={{
            backgroundColor: "rgba(255, 49, 49, 0.1)",
            borderRadius: 20,
          }}
          px={2}
          alignItems={"center"}
        >
          <Box color={"#58187B"}>Google</Box>
          <Box fontSize={9}>❌</Box>
        </Box>
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
          marginLeft: -0.5,
          "&:hover": { backgroundColor: "rgba(27, 0, 65, 0.95)" },
        }}
      >
        Run Analysis
      </Button>
    </div>
  );
};

export default ChooseStocks;
