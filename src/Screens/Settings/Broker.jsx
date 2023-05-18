import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const zerodhaLogin = () => {
  const apiKey = "xxdvudzoe7oa4l44"; // Replace with your Zerodha API key
  const redirectUrl = "http://localhost:3000/"; // Replace with your redirect URL

  const loginUrl = `https://kite.trade/connect/login?api_key=${apiKey}&redirect_url=${encodeURIComponent(
    redirectUrl
  )}`;
  console.log(loginUrl);
  // Redirect the user to the login URL
  window.location.href = loginUrl;
};

const fetchStocks = async () => {
  const temp = await fetch(
    "https://indian-stock-broker.indmoney.com/portfolio/summary?response_format=json",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTEzMjcxLCJ1c2VybmFtZSI6Ijk4NzMyMTk5NDYiLCJleHAiOjE2ODQ0MzE0MjUsImVtYWlsIjoiamlneWFzdWRoaW5ncmFAZ21haWwuY29tIiwibW9iaWxlIjoiOTg3MzIxOTk0NiIsIm9yaWdfaWF0IjoxNjg0NDE3MDI1LCJwbGF0Zm9ybSI6IldFQiIsImNyZWF0ZWRfb24iOjE2ODQ0MTcwMjUsInRva2VuX2lkIjozNjYxMDA4fQ.Beycmntckvr_YWhugnbip_zuJEHuLmVwGU62sCzGAbc",
        platform: "web",
        "sec-ch-ua":
          '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://www.indmoney.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  );
  const res = await temp.data();
  console.log(res);
};

const Broker = () => {
  const { userInfo, updateData } = useContext(UserContext);
  console.log(userInfo);

  return (
    <Box p={3} pl={"8%"} m={3}>
      <Box color="#480283" fontFamily={"Garet Heavy"} fontSize={24}>
        Connect your broker
      </Box>
      <Box width={"40%"} pt={1} fontSize={12}>
        <Button
          sx={{
            borderRadius: 20,
            backgroundColor: "rgba(72, 2, 131, 0.25)",
            color: "#1B0041",
            fontFamily: "Garet Book",
            fontSize: 12,
            padding: 1,
            width: 100,
          }}
          onClick={() => {
            fetchStocks();
          }}
        >
          Zerodha
        </Button>
        <Button
          sx={{
            borderRadius: 20,
            backgroundColor: "rgba(72, 2, 131, 0.25)",
            color: "#1B0041",
            fontFamily: "Garet Book",
            fontSize: 12,
            padding: 1,
            width: 100,
            marginLeft: 2,
          }}
        >
          Upstox
        </Button>
      </Box>
    </Box>
  );
};

export default Broker;
