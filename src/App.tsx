import { Box } from "@mui/material";
import NavigationMenu from "./Components/NavigationMenu";
import RouteLayout from "./RootLayout";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Box width="100%">
        <NavigationMenu />
      </Box>
      <RouteLayout />
    </div>
  );
}

export default App;
