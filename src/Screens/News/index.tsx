import { Box } from "@mui/material";
import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { UserContext } from "../../Contexts/UserContext";
import { updateInFirebase } from "../Portfolio/PortfolioStockCards";

const News = () => {
  const { userInfo, updateData }: any = useContext(UserContext);
  const news = userInfo.news;
  const allStockNews: any = {};
  for (let i = 0; i < userInfo.user.scrips.length; i++) {
    allStockNews[userInfo.user.scrips[i].metadata.name] = {
      logo: userInfo.user.scrips[i].metadata.logo,
      news: news[userInfo.user.scrips[i].metadata.name],
    };
  }

  const stockSymbols = userInfo.user.scrips.map((i: any) => i.metadata.name);
  const getAllStockNews = async () => {
    const tempNews: any = {};
    for (let i = 0; i < stockSymbols.length; i++) {
      const temp = await fetch(
        `https://newsapi.org/v2/everything?q=${stockSymbols[i]}&from=2023-05-18&to=2023-05-19&sortBy=popularity&apiKey=8e22364a435e4941bf6c8232770fff59&pageSize=5`
      );
      const res = await temp.json();
      tempNews[stockSymbols[i]] = res;
    }
    return tempNews;
  };

  const fetchNews = async () => {
    const tempNews: any = await getAllStockNews();
    const tempUserInfo = { ...userInfo, news: tempNews };
    console.log(tempNews);
    await updateInFirebase(tempUserInfo);
    await updateData(tempUserInfo);
  };

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
          {/* <Button onClick={fetchNews}>Fetch News</Button> */}
          {Object.keys(allStockNews).map((i: any) =>
            allStockNews[i].news.articles.length > 0 ? (
              <NewsCard
                key={allStockNews[i].logo}
                name={i}
                news={allStockNews[i].news}
                logo={allStockNews[i].logo}
              />
            ) : (
              <></>
            )
          )}
        </Box>
      </Box>
    </div>
  );
};

export default News;
