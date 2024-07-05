import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { StyledTypography } from "../../../styles";

const TeamCard = ({ img, name, role }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme.container,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        p: "16px",
        background: "white",
        borderRadius: "16px",
      }}
    >
      <img src={img} alt="Avatar" style={{ width: "213px" }} />
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <LinkedInIcon />
        <StyledTypography
          fontWeight={600}
          fontSize={"1rem"}
          lineHeight={"20.16px"}
        >
          {name}
        </StyledTypography>
        <StyledTypography
          fontWeight={400}
          lineHeight={"15.12px"}
          fontSize={"0.75rem"}
          color={"#8F9499"}
        >
          {role}
        </StyledTypography>
      </Box>
    </Box>
  );
};

export default TeamCard;
