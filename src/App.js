import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

//

const App = () => (
  <Box sx={{ backgroundColor: "#000" }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  </Box>
);

export default App;
