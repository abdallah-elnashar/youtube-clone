import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

//
import { fetchFromAPI } from "../utils/fetchFromAPI";
//

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Elmenshawy");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(
      `search?q=${selectedCategory}&part=snippet,id&maxResults=50`
    ).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 Elnashar Media
        </Typography>
      </Box>
      <Box p={2} sx={{ flex: 2, overflow: "auto", height: "90vh" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
