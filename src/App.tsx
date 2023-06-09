import { Box } from "@mui/material";
import NavigationMenu from "./Components/NavigationMenu";
import RouteLayout from "./RootLayout";
import { UserContext, userDetails } from "./Contexts/UserContext";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Loader from "./Components/Loader";

const App = () => {
  const [userInfo, setUserInfo] = useState(userDetails);
  const [loading, setLoading] = useState(true);

  const updateData = (newData: any) => {
    setUserInfo(newData);
  };

  // --- Get user data from database ---
  const intialization = async () => {
    const docSnap = await getDoc(doc(db, "users", "jigyasudhingra@gmail.com"));

    if (docSnap.exists()) {
      updateData(docSnap.data());
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };

  useEffect(() => {
    intialization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, updateData }}>
      <div style={{ width: "100%" }}>
        <Box width="100%">
          <NavigationMenu />
        </Box>
        {loading ? <Loader /> : <RouteLayout />}
      </div>
    </UserContext.Provider>
  );
};

export default App;
