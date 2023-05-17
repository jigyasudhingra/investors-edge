import { Box } from "@mui/material";
import LOGO from "../logo.webp";
import { Link } from "react-router-dom";

const NAVIGATION_ITEMS = [
  {
    name: "portfolio",
    id: "portfolio",
    to: "portfolio",
  },
  {
    name: "watchlist",
    id: "watchlist",
    to: "watchlist",
  },
  {
    name: "Stock picker",
    id: "stock-picker",
    to: "stock-picker",
  },
  {
    name: "news",
    id: "news",
    to: "news",
  },
  {
    name: "settings",
    id: "settings",
    to: "settings",
  },
];

const NavigationMenu = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Box
        top={0}
        p={3}
        px={5}
        m={3}
        mx={30}
        borderRadius={6}
        sx={{
          backgroundColor: "rgba(27, 0, 65, 0.65)",
          color: "white",
        }}
        display="flex"
        flexDirection="row"
      >
        <Box width="40%">
          <Link
            style={{
              display: "flex",
              textDecoration: "none",
              color: "white",
              textTransform: "uppercase",
              alignItems: "center",
            }}
            to=""
          >
            <img width="12%" src={LOGO} alt="logo" />
            <Box pl={1.8} letterSpacing={1} fontFamily="Garet Heavy">
              INVESTOR'S EDGE
            </Box>
          </Link>
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="right"
        >
          {NAVIGATION_ITEMS.map((i) => (
            <Box key={i.id} pl={1.8}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  textTransform: "uppercase",
                }}
                to={i.to}
              >
                {i.name}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default NavigationMenu;
