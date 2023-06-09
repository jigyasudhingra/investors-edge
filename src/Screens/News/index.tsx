import { Box, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import NewsCard from "./NewsCard";
import { UserContext } from "../../Contexts/UserContext";
import { updateInFirebase } from "../Portfolio/PortfolioStockCards";
import Loader from "../../Components/Loader";

const News = () => {
  const { userInfo, updateData }: any = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const news = userInfo.news;
  const allStockNews: any = {};
  for (let i = 0; i < userInfo.user.scrips?.length; i++) {
    allStockNews[userInfo.user.scrips[i].metadata.name] = {
      logo: userInfo.user.scrips[i].metadata.logo,
      news: news[userInfo.user.scrips[i].metadata.name],
    };
  }

  const getFiveDaysBeforeDate = (formatted: boolean) => {
    var currentDate = new Date();
    !formatted && currentDate.setDate(currentDate.getDate() - 5);

    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, "0");
    var day = String(currentDate.getDate()).padStart(2, "0");

    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  };

  const stockSymbols = userInfo.user.scrips.map((i: any) => i.metadata.name);
  const getAllStockNews = async () => {
    const tempNews: any = {};
    for (let i = 0; i < stockSymbols?.length; i++) {
      const fiveDaysBeforeDate = getFiveDaysBeforeDate(false);
      const todaysDateInFormat = getFiveDaysBeforeDate(true);
      const temp = await fetch(
        `https://newsapi.org/v2/everything?q=${stockSymbols[i]}&from=${fiveDaysBeforeDate}&to=${todaysDateInFormat}&sortBy=popularity&apiKey=8e22364a435e4941bf6c8232770fff59&pageSize=5`
      );
      const res = await temp.json();
      tempNews[stockSymbols[i]] = res;
    }
    return tempNews;
  };

  const fetchNews = async () => {
    setLoading(true);
    const tempNews: any = await getAllStockNews();
    const tempUserInfo = { ...userInfo, news: tempNews };
    console.log(tempNews);
    await updateInFirebase(tempUserInfo);
    await updateData(tempUserInfo);
    setLoading(false);
  };

  return (
    <div
      style={{
        paddingTop: 130,
        backgroundColor: "#EDE0FF",
        minHeight: "100vh",
      }}
    >
      {loading && <Loader />}
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
          {Object?.keys(allStockNews).map((i: any) =>
            allStockNews[i].news?.articles?.length > 0 ? (
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
        <Button
          sx={{
            backgroundColor: "rgba(255, 49, 49, 0.1)",
            width: 100,
            borderRadius: 30,
            textDecoration: "none",
            color: "#58187B",
            textTransform: "capitalize",
            fontSize: 12,
            padding: 0.7,
            marginTop: 2,
            marginLeft: 1.6,
            fontFamily: "Garet Book",
            "&:hover": { backgroundColor: "rgba(255, 49, 49, 0.3)" },
          }}
          onClick={() => fetchNews()}
        >
          Fetch News
        </Button>
      </Box>
    </div>
  );
};

export default News;
