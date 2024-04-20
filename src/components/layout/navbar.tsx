"use client";
import React, { FC, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LogoImage from "../../../public/images/woody-circle.svg";
import Image from "next/image";
import { Grid, useTheme } from "@mui/material";

interface NavbarProps {
  pages: string[];
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid container p={2}>
          <Grid item xs={10} gap={5} display="flex" alignItems="center">
            <Image src={LogoImage} width={90} height={90} alt="Woodyland" />
            <Grid item display="flex" gap={3}>
              {pages.map((page) => (
                <Button
                  variant="text"
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: "none",
                  }}
                  size="large"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography>{page}</Typography>
                </Button>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Rezervišite
            </Button>
          </Grid>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
