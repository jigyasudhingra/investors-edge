import { Box, Button, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { updateInFirebase } from "../Portfolio/PortfolioStockCards";
import Loader from "../../Components/Loader";

const TECHNICAL_INDICATOR_DETAILS = [
  {
    field: "MA",
    value: "",
  },
  {
    field: "RSI",
    value: "",
  },
  {
    field: "MACD",
    value: "",
  },
  {
    field: "Bollinger bands",
    value: "",
  },
  {
    field: "William R%",
    value: "",
  },
];

const INDICATORS: any = {
  bollingerBands: {
    period: 20,
    stdDev: 2,
  },
  macd: {
    emaShort: 12,
    emaLong: 26,
    signalPeriod: 9,
  },
  sma: {
    period: 44,
  },
  rsi: {
    buyValue: 30,
    sellValue: 70,
    period: 14,
  },
};

const TechnicalSection = () => {
  const { userInfo, updateData }: any = useContext(UserContext);
  const [inputFields, setInputFields] = useState(
    // userInfo.user.settings.technicalIndicators
    INDICATORS
  );
  const [loading, setLoading] = useState(false);

  const saveTechnicalValues = async () => {
    setLoading(true);
    const temp = userInfo;
    temp.user.settings.technicalIndicators = inputFields;
    await updateInFirebase(temp);
    await updateData(temp);
    setLoading(false);
  };

  return (
    <Box p={3} pl={"8%"} pt={0} m={3} width={550}>
      {loading && <Loader />}

      <Box color="#480283" fontFamily={"Garet Heavy"} fontSize={24}>
        Technical Indicators
      </Box>
      <Box pt={1} fontSize={12}>
        Investing can be a daunting task, but it doesn't have to be. With
        Investor's Edge, you can get the edge you need to win in the stock
        market.
      </Box>
      <Grid container lg={12} item pt={2}>
        {Object.keys(inputFields).map((i: any, idx: number) => (
          <Grid
            key={i}
            pt={2}
            fontFamily={"Garet Book"}
            fontSize={12}
            item
            lg={6}
            sm={6}
            xs={6}
          >
            <Box pb={1} color="#1B0041" fontWeight={900} fontSize={14}>
              {i}
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={2}>
              {Object.keys(inputFields[i]).map((j, jIdx) => (
                <Box key={j} display={"flex"} flexDirection={"column"}>
                  <span>{j}</span>
                  <input
                    style={{
                      margin: 10,
                      marginLeft: -10,
                      borderRadius: 20,
                      padding: 15,
                      width: 200,
                      backgroundColor: "rgba(72, 2, 131, 0.05)",
                      border: "none",
                      color: "#1B0041",
                      fontFamily: "Garet Book",
                    }}
                    placeholder={j}
                    value={inputFields[i][j]}
                    onChange={(e) => {
                      let temp = { ...inputFields };
                      temp[i][j] = e.target.value;
                      setInputFields({ ...temp });
                    }}
                    type="number"
                  ></input>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
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
        onClick={() => saveTechnicalValues()}
      >
        Save Values
      </Button>
    </Box>
  );
};

export default TechnicalSection;
