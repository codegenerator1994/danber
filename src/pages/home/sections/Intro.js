import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  StyledTypography,
  SubscribeTextField,
  SubscribeButton,
} from "../../../styles";

import IntroImg from "../../../assets/images/intro_img.png";
import SubscribeImg from "../../../assets/images/subscribe_img.png";

const Intro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:430px)");

  const colors = [
    "rgb(99 102 241)",
    "rgb(250 204 21)",
    "rgb(21 128 61)",
    "rgb(239 68 68)",
    "rgb(219 39 119)",
    "rgb(99 102 241)",
    "rgb(219 39 119)",
    "rgb(20 184 166)",
    "rgb(249 115 22)",
    "rgb(132 204 22)",
  ];
  const text = "DanberKidz";

  return (
    <Box
      sx={{
        width: "100%",
        ...theme.container,
        position: "relative",
        mb: isMobile ? "30px" : "139px",
      }}
    >
      <img
        src={IntroImg}
        alt="img"
        style={{ width: "100%", display: isMobile ? "none" : "block" }}
      />
      <Box
        sx={{
          position: isMobile ? "relative" : "absolute",
          ...theme.container,
          width: "100%",
          px: isMobile ? "20px" : "111px",
          py: isMobile ? "20px" : "unset",
          gap: 6,
          top: isMobile ? 0 : "50%",
          left: isMobile ? 0 : "50%",
          transform: isMobile ? "none" : "translate(-50%, -41%)",
          background: isMobile ? "black" : "unset",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            flex: 1,
            ...theme.container,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              ...theme.container,
              justifyContent: "space-between",
            }}
          >
            <StyledTypography
              fontWeight={600}
              fontSize={"1.5rem"}
              lineHeight={"32.11px"}
              paragraph={"7px"}
              color={"white"}
            >
              Spotlight
            </StyledTypography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#665FD5",
                borderRadius: "53px",
                textTransform: "capitalize",
              }}
            >
              Coming soon
            </Button>
          </Box>
          <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
            <StyledTypography
              fontSize={"2.25rem"}
              color={"white"}
              lineHeight={"48.17px"}
              fontWeight={700}
            >
              Introducing the &nbsp;
            </StyledTypography>
            {text.split("").map((char, index) => (
              <StyledTypography
                key={index}
                sx={{
                  color: colors[index],
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  lineHeight: "48.17px",
                }}
              >
                {char}
              </StyledTypography>
            ))}
            <StyledTypography
              fontSize={"2.25rem"}
              color={"white"}
              lineHeight={"48.17px"}
              fontWeight={700}
            >
              &nbsp; App
            </StyledTypography>
          </Box>
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"23.4px"}
            paragraph="7px"
            fontWeight={500}
            color={"white"}
          >
            Our DanberKidz App is your trusted companion and go-to solution for
            modern, reliable, secure, and convenient childcare.
          </StyledTypography>
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"23.4px"}
            paragraph="7px"
            fontWeight={500}
            color={"white"}
          >
            Designed to meet the needs of busy parents and caregivers, our app
            seamlessly connects families with reliable caregivers.
          </StyledTypography>
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"23.4px"}
            paragraph="7px"
            fontWeight={500}
            color={"white"}
          >
            Follow <b>@Danberkidz</b> on social media
          </StyledTypography>
          <Box
            sx={{ ...theme.container, justifyContent: "flex-start", gap: 2 }}
          >
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
          </Box>
          <Box
            sx={{
              ...theme.container,
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1.5,
              flex: 1,
            }}
          >
            <StyledTypography
              fontSize={"1.125rem"}
              lineHeight={"23.4px"}
              paragraph="7px"
              fontWeight={500}
              color={"white"}
            >
              Subscribe to stay updated on our latest news and releases!
            </StyledTypography>
            <Box
              sx={{
                ...theme.container,
                justifyContent: isMobile ? "center" : "space-between",
                gap: 1.25,
                width: "100%",
                alignItems: "stretch",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <SubscribeTextField
                variant="outlined"
                placeholder="Enter your email address"
                size="small"
                fullWidth
                sx={{ mr: 2 }}
              />
              <SubscribeButton variant="contained">Subscribe</SubscribeButton>
            </Box>
          </Box>
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"23.4px"}
            paragraph="7px"
            fontWeight={500}
            color={"#14AE5C !important"}
          >
            Thank you for subscribing, We will get back to you shortly!
          </StyledTypography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={SubscribeImg} alt="Img" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
