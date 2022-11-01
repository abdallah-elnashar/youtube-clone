import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

//

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const [channelBackground, setChannelBackground] = useState("");
  const { id } = useParams();

  //
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
      setChannelBackground(
        data?.items[0].brandingSettings.image.bannerExternalUrl
      );
    });

    //
    fetchFromAPI(
      `search?channelId=${id}&part=snippet,id&order=date&maxResults=50`
    ).then((data) => setChannelVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            zIndex: 10,
            height: "300px",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              zIndex: 10,
              height: "100%",
              width: "100%",
            }}
            src={channelBackground}
            alt="background image"
          />
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={channelVideos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
