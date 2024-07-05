import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Logo from "../assets/images/n_logo.png";

const pages = [
  { name: "Home", link: "/", menuItems: [] },
  { name: "About Us", link: "/", menuItems: [] },
  { name: "Products", link: "/", menuItems: [] },
  { name: "Services", link: "/", menuItems: [] },
  { name: "Contact Us", link: "/", menuItems: [] },
];

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setExpandedSubMenu("");
    setAnchorElNav(null);
  };

  const handleExpandedMenu = (pageName) => {
    if (pageName === expandedSubMenu) {
      setExpandedSubMenu("");
    } else {
      setExpandedSubMenu(pageName);
    }
  };

  const handleRedirectUrl = (url) => {
    handleCloseNavMenu();
    if (url) {
      navigate(url);
    }
  };

  return (
    <AppBar
      className="brand-navbar"
      position="sticky"
      sx={{
        background: theme.palette.common.white,
        top: 0,
        zIndex: 999,
        padding: isMobile ? `15px 26px` : `15px 88px`,
        boxShadow: "none",
      }}
    >
      <Container sx={{ minWidth: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            "@media only screen and (max-width: 430px)": {
              alignItems: "center",
            },
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "80%",
              }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.link}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={() => handleRedirectUrl(page.link)}>
                    <Typography
                      className="navbar-item"
                      sx={{
                        color: theme.palette.text.primary,
                        position: "relative",
                      }}
                      textAlign="center"
                    >
                      {page.name}
                      {page.menuItems.length > 0 && <ArrowForwardIosIcon />}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: theme.spacing(3),
            }}
          >
            {pages.map((page) => (
              <Box key={page.name}>
                <Button
                  className="menu-item"
                  onClick={() => handleRedirectUrl(page.link)}
                  onMouseEnter={() => handleExpandedMenu(page.name)}
                  onMouseLeave={() => setExpandedSubMenu("")}
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    color: theme.palette.text.primary,
                    fontSize: "1rem",
                  }}
                >
                  {page.name}
                  {page.menuItems.length > 0 && (
                    <span>
                      {expandedSubMenu === page.name ? (
                        <ExpandLess sx={{ position: "absolute", top: "7px" }} />
                      ) : (
                        <ExpandMore sx={{ position: "absolute", top: "7px" }} />
                      )}
                    </span>
                  )}
                  {expandedSubMenu === page.name &&
                    page.menuItems.length > 0 && (
                      <Box
                        className="submenu"
                        sx={{
                          position: "absolute",
                          textAlign: "left",
                          height: "auto",
                          width: "240px",
                          background: theme.palette.background.paper,
                          boxShadow: theme.shadows[3],
                          borderRadius: "4px",
                          mt: 1,
                        }}
                      >
                        {page.menuItems.map((item) => (
                          <MenuItem
                            key={item.name}
                            onClick={() => handleRedirectUrl(item.link)}
                            sx={{ padding: theme.spacing(1) }}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
