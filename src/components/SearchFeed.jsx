import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

//
import { fetchFromAPI } from "../utils/fetchFromAPI";

//

const SearchFeed = () => {
  //
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  //
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  //
  return (
    <Box p={2} sx={{ flex: 2, overflow: "auto", height: "90vh" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
