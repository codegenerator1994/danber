import { Box, styled, Typography, TextField, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

export const StyledTypography = styled(Typography)`
  font-family: "MainFont", sans-serif;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-16px);
  }
  60% {
    transform: translateY(-8px);
  }
`;

export const BouncingBox = styled(Box)`
  animation: ${bounce} 2s infinite;
`;

export const VideoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "1100px",
  margin: "auto",
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  "& video": {
    width: "100%",
    height: "auto",
    display: "block",
  },
  "& .play-button": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .play-button:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
}));

export const SubscribeTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "25px",
    backgroundColor: theme.palette.common.black,
    height: 56,
    width: "100%",
    "& .MuiInputBase-input": {
      color: theme.palette.common.white,
    },
    "& fieldset": {
      borderColor: theme.palette.grey[500],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const SubscribeButton = styled(Button)(({ theme }) => ({
  borderRadius: "64px",
  backgroundColor: "#665FD5",
  color: theme.palette.common.white,
  textTransform: "none",
  padding: "16px 40px",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#665FD5",
  },
}));
