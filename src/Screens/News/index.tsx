import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      // const response = await axios.get(
      //   `https://newsapi.org/v2/everything?q=${}&from=2023-05-17&to=2023-05-18&sortBy=popularity&searchIn=title&apiKey=8e22364a435e4941bf6c8232770fff59&pageSize=1`
      // );
      // setNews(response.data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div
      style={{
        paddingTop: 130,
        backgroundColor: "#EDE0FF",
        minHeight: "100vh",
      }}
    >
      <Box p={3} m={3} px={8} width={"80%"}>
        <Box color="#480283" fontFamily={"Garet Heavy"} fontSize={24}>
          Latest News
        </Box>
        <Box pt={1} fontSize={12} width={600}>
          Investing can be a daunting task, but it doesn't have to be. With
          Investor's Edge, you can get the edge you need to win in the stock
          market. Investing can be a daunting task, but it doesn't have to be.
          With Investor's Edge, you can get the edge you need to win in the
          stock market.
        </Box>
        <Box
          pt={4}
          display={"flex"}
          flexDirection={"row"}
          gap={5}
          flexWrap={"wrap"}
        >
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Box>
      </Box>
    </div>
  );
};

export default News;
