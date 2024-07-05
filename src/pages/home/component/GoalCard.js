import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

import { StyledTypography } from "../../../styles";

const GoalCard = ({ title, description, bgColor }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme.container,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        px: "35px",
        py: "37px",
        background: bgColor,
        borderRadius: "16px",
      }}
    >
      <StyledTypography
        color="black"
        fontWeight={600}
        fontSize={"1.5rem"}
        paragraph={"16px"}
        lineHeight={"37.51px"}
      >
        {title}
      </StyledTypography>
      <StyledTypography
        color="#8F8F8F"
        fontWeight={400}
        fontSize={"1.25rem"}
        paragraph={"16px"}
        lineHeight={"31.26px"}
      >
        {description}
      </StyledTypography>
    </Box>
  );
};

export default GoalCard;
