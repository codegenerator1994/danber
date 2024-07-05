import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { StyledTypography } from "../styles";

import Logo from "../assets/images/footer_logo.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:667px)");

  return (
    <Box
      sx={{
        ...theme.container,
        padding: "80px 90px 58px 90px",
        background: "white",
        mt: "102px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: "100%",
          ...theme.container,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          mb: isMobile ? "30px" : "140px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box sx={{ flex: 1, textAlign: isMobile ? "center" : "unset" }}>
          <img src={Logo} alt="Logo" style={{ marginBottom: "32px" }} />
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"27px"}
            paragraph="16px"
            fontWeight={500}
          >
            PO Box 891132
          </StyledTypography>
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"27px"}
            paragraph="16px"
            fontWeight={500}
          >
            Temecula, California 92591
          </StyledTypography>
          <StyledTypography
            fontSize={"1.125rem"}
            lineHeight={"27px"}
            paragraph="16px"
            fontWeight={500}
          >
            United States
          </StyledTypography>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            textAlign: isMobile ? "center" : "unset",
          }}
        >
          <StyledTypography
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={"30px"}
            paragraph={"16px"}
            mb={2}
          >
            Quick Links
          </StyledTypography>
          <Box
            sx={{
              ...theme.container,
              alignItems: isMobile ? "center" : "flex-start",
              gap: "12px",
              flexDirection: "column",
            }}
          >
            <StyledTypography
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"20.16px"}
            >
              Home
            </StyledTypography>
            <StyledTypography
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"20.16px"}
            >
              About Us
            </StyledTypography>
            <StyledTypography
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"20.16px"}
            >
              Services
            </StyledTypography>
            <StyledTypography
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"20.16px"}
            >
              Products
            </StyledTypography>
            <StyledTypography
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"20.16px"}
            >
              Contact Us
            </StyledTypography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          ...theme.container,
          justifyContent: "space-between",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box sx={{ textAlign: isMobile ? "center" : "unset" }}>
          <StyledTypography
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={"30px"}
            paragraph="16px"
          >
            © 2024 Danber Technologies, Inc. All Rights Reserved.
          </StyledTypography>
          <StyledTypography
            fontWeight={400}
            fontSize={"1rem"}
            lineHeight={"24px"}
            paragraph="16px"
          >
            Privacy Policy | Terms of Use | Cookie Policy
          </StyledTypography>
        </Box>
        <Box>
          <StyledTypography
            fontWeight={400}
            fontSize={"1rem"}
            lineHeight={"24px"}
            paragraph="16px"
          >
            Stay Connected!
          </StyledTypography>
          <Box sx={{ ...theme.container, gap: "3px" }}>
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
