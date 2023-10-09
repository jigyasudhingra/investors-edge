import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <video
          src="https://video-public.canva.com/VAE_zRNSMq8/v/6081cce9ea.mp4"
          autoPlay
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loop
          muted
        />
        <div
          style={{
            top: 0,
            position: "absolute",
            backgroundColor: "#1B0041",
            width: "100%",
            height: "100%",
            opacity: "30%",
          }}
        ></div>
        <Box
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              fontSize: 60,
              letterSpacing: 1.5,
              fontFamily: "Garet HEavy",
              color: "white",
            }}
          >
            INVESTING FOR
          </Box>
          <Box
            style={{
              fontSize: 56,
              letterSpacing: 1.5,
              fontFamily: "Garet HEavy",
              color: "white",
            }}
          >
            THE FUTURE
          </Box>
          <Box
            sx={{
              textTransform: "uppercase",
              color: "white",
              fontSize: 14,
              letterSpacing: 2,
            }}
          >
            ONE STOP LONG term stock investment solution
          </Box>
          <Link to="/stock-picker">
            <Button
              sx={{
                backgroundColor: "rgba(161, 0, 248, 0.7)",
                borderRadius: 30,
                textDecoration: "none",
                color: "white",
                textTransform: "capitalize",
                fontSize: 14,
                letterSpacing: 1.1,
                padding: 1,
                paddingLeft: 4,
                marginTop: 5,
                fontFamily: "Garet Book",
                paddingRight: 4,
                "&:hover": { backgroundColor: "rgba(161, 0, 248, 1)" },
              }}
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default HeroSection;
