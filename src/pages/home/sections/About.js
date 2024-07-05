import React, { useRef, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { StyledTypography, VideoContainer } from "../../../styles";

import Video from "../../../assets/videos/movie.mp4";

const About = () => {
  const isMobile = useMediaQuery("(max-width:667px)");

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        mb: isMobile ? "30px" : "100px",
        px: isMobile ? "10px" : "80px",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "63%",
          mb: isMobile ? "20px" : "80px",
        }}
      >
        <StyledTypography
          textTransform={"uppercase"}
          fontSize={"1.5rem"}
          lineHeight={"37.51px"}
          fontWeight={600}
          paragraph={"16px"}
        >
          ABOUT US
        </StyledTypography>
        <StyledTypography
          textTransform={"uppercase"}
          fontSize={"3.5rem"}
          lineHeight={isMobile ? "54px" : "71.68px"}
          fontWeight={500}
          paragraph={"16px"}
          textAlign={isMobile ? "center" : "unset"}
        >
          At Danber Technologies, we are committed to empowering the now.
        </StyledTypography>
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "49%",
          marginLeft: "auto",
          mb: isMobile ? "20px" : "141px",
        }}
      >
        <StyledTypography
          fontSize={"1.5rem"}
          lineHeight={"30.72px"}
          fontWeight={500}
          paragraph={"16px"}
          textAlign={isMobile ? "center" : "unset"}
        >
          Our website and mobile applications unite technology with compassion,
          connecting individuals and businesses in a digital ecosystem that
          prioritizes innovation.
        </StyledTypography>
      </Box>

      <VideoContainer sx={{ height: isMobile ? "auto" : "574px" }}>
        <video ref={videoRef} controls={isPlaying}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <Box className="play-button" onClick={handlePlay}>
            <PlayArrowIcon fontSize="large" />
          </Box>
        )}
      </VideoContainer>
    </Box>
  );
};

export default About;
