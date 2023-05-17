import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/Home";
import Settings from "./Screens/Settings";
import WatchList from "./Screens/WatchList";
import Portfolio from "./Screens/Portfolio";
import StockPicker from "./Screens/StockPicker";
import News from "./Screens/News";
import Test from "./Screens/Test";

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/stock-picker" element={<StockPicker />} />
      <Route path="/news" element={<News />} />
      <Route path="/api/test" element={<Test />} />
    </Routes>
  );
};

export default RouteLayout;
