import React, { FC } from "react";
import "./styles.css";
import { Box, alpha } from "@mui/material";
export interface LoaderProps {
  overlayed?: boolean;
}

const Loader: FC<LoaderProps> = ({ overlayed = false }) => {
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: `100vh`,
        width: `100vw`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: alpha("#000", 0.4),
      }}
      display="flex"
      width="100%"
      justifyContent="center"
    >
      <div className="spinner"></div>
    </Box>
  );
};

export default Loader;
