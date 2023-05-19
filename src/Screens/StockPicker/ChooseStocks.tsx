import { Box, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import "./stockpicker.css";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";
import Loader from "../../Components/Loader";

const ChooseStocks = ({ result, setResult }: any) => {
  const [inputText, setInputText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<any>([]);
  const [clickedStocks, setClickedStocks] = useState<any>([]);
  const { userInfo }: any = useContext(UserContext);
  const ratios = userInfo.user.settings.fundamentalRatios;
  const [loading, setLoading] = useState(false);

  const performAnalysis = async () => {
    setLoading(true);
    const tempRatios: any = {};
    for (let i = 0; i < ratios.length; i++) {
      tempRatios[ratios[i].id] = parseInt(ratios[i].value);
    }
    const tempStocks = [];
    for (let i = 0; i < clickedStocks.length; i++) {
      tempStocks.push(clickedStocks[i].symbol);
    }
    console.log(tempRatios, tempStocks);
    const data = {
      ...tempRatios,
      stocks: tempStocks,
    };

    const temp = await fetch("http://127.0.0.1:5000/fundamental", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await temp.json();
    setResult(res);
    setLoading(false);
  };

  useEffect(() => {
    const getSuggestions = async () => {
      const temp = await fetch(
        `https://www.nseindia.com/api/search/autocomplete?q=${inputText}`
      );

      const res = await temp.json();
      setSuggestions(res);
    };

    if (inputText.length <= 0) return;

    const timer = setTimeout(() => getSuggestions(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputText]);

  const addToClickedStocks = (symbolDetail: any) => {
    for (let i = 0; i < clickedStocks.length; i++) {
      if (clickedStocks[i].symbolInfo === symbolDetail.symbol_info) {
        setShowSuggestions(false);
        return;
      }
    }

    setClickedStocks([
      ...clickedStocks,
      { symbol: symbolDetail.symbol, symbolInfo: symbolDetail.symbol_info },
    ]);
    setShowSuggestions(false);
  };

  const removeFromClikedStocks = (stockName: any) => {
    const temp = clickedStocks.filter((i: any) => i !== stockName);
    setClickedStocks(temp);
  };

  return (
    <div>
      <Box color={"#480283"} fontSize={16} fontWeight={900} letterSpacing={0.5}>
        Choose Stocks
      </Box>
      {loading && <Loader />}
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
          value={inputText}
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => setInputText(e.target.value)}
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
      {showSuggestions && (
        <Box
          position={"absolute"}
          sx={{
            backgroundColor: "white",
            width: 350,
            zIndex: 90,
            maxHeight: 200,
            overflowY: "scroll",
          }}
        >
          {suggestions?.symbols?.length > 0 &&
            suggestions.symbols.map((i: any) => (
              <div
                key={i.symbol}
                style={{
                  cursor: "pointer",
                  padding: 3,
                  margin: 2,
                }}
                onClick={() => addToClickedStocks(i)}
              >
                {i.symbol}
              </div>
            ))}
        </Box>
      )}
      <Box
        mt={3}
        ml={-0.5}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        width={500}
        gap={2}
      >
        {clickedStocks.map((i: any) => (
          <Box
            key={i.symbol}
            display={"flex"}
            justifyContent={"space-between"}
            p={1}
            sx={{
              backgroundColor: "rgba(255, 49, 49, 0.1)",
              borderRadius: 20,
            }}
            px={2}
            alignItems={"center"}
          >
            <Box color={"#58187B"}>{i.symbolInfo}</Box>
            <Box
              sx={{
                cursor: "pointer",
              }}
              fontSize={9}
              ml={1}
              onClick={() => removeFromClikedStocks(i)}
            >
              ❌
            </Box>
          </Box>
        ))}
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
        onClick={performAnalysis}
      >
        Run Analysis
      </Button>
    </div>
  );
};

export default ChooseStocks;
