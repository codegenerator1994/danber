import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledTypography, BouncingBox } from "../../../styles";

import HeroImg from "../../../assets/images/hero_img.png";

const Hero = () => {
  const theme = useTheme();
  const isLandMobile = useMediaQuery("(max-width:667px)");
  const isMobile = useMediaQuery("(max-width:430px)");
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 94px)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          width: "100%",
          height: isLandMobile ? "calc(100% - 94px)" : "calc(100% - 215px)",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <StyledTypography variant="h2" color="white">
            Danber Technologies
          </StyledTypography>
          <StyledTypography variant="h6" color="white">
            Empowering the now
          </StyledTypography>
        </Box>
      </Box>
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "72px",
          }}
        >
          <StyledTypography
            fontStyle={"italic"}
            fontWeight={300}
            fontSize={"0.875rem"}
            lineHeight={"17.64px"}
            color={"white"}
          >
            scroll to explore
          </StyledTypography>
          <BouncingBox>
            <ArrowDownwardIcon sx={{ fontSize: 40, color: "white" }} />
          </BouncingBox>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          borderRadius: "80px 80px 0 0",
          height: isMobile || isLandMobile ? 38 : 80,
          background: "#F6F6F6",
        }}
      />
    </Box>
  );
};

export default Hero;
