import { Box } from "@mui/material";
import React from "react";

const Result = () => {
  return (
    <Box>
      <Box
        mt={4}
        color={"#480283"}
        fontSize={16}
        fontWeight={900}
        letterSpacing={0.5}
      >
        Result
      </Box>
      <Box mt={0.5} color={"#1B0041"} fontSize={12} letterSpacing={0.5}>
        Click to view the report
      </Box>
      <Box
        mt={2}
        ml={-0.5}
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        width={650}
        flexWrap={"wrap"}
      >
        {RESULT_ITEMS.map((i) => (
          <Box
            sx={{
              backgroundColor:
                i.result === "BUY"
                  ? "rgba(0, 191, 99, 0.17)"
                  : "rgba(255, 49, 49, 0.1)",
              padding: 2,
              paddingLeft: 3,
              paddingRight: 3,
              borderRadius: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            width={250}
            fontSize={12}
            color="#1B0041"
          >
            <Box>{i.name}</Box>
            <Box fontWeight={900} width={60} textAlign={"center"}>
              {i.result}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const RESULT_ITEMS = [
  {
    name: "Apple",
    result: "BUY",
  },
  {
    name: "Google",
    result: "NOT BUY",
  },
  {
    name: "Twitter",
    result: "NOT BUY",
  },
  {
    name: "Tesla",
    result: "BUY",
  },
  {
    name: "AMD Co.",
    result: "BUY",
  },
];

export default Result;
