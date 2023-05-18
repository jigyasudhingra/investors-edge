import { Box } from "@mui/material";
import NavigationMenu from "./Components/NavigationMenu";
import RouteLayout from "./RootLayout";
import { UserContext, userDetails } from "./Contexts/UserContext";
import { useState } from "react";
import { a } from "./firebase-config";

function App() {
  const [userInfo, setUserInfo] = useState(userDetails);
  const updateData = (newData: any) => {
    setUserInfo(newData);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateData }}>
      <div style={{ width: "100%" }}>
        <Box width="100%">
          <NavigationMenu />
        </Box>
        <RouteLayout />
      </div>
    </UserContext.Provider>
  );
}

export default App;
