"use client";
import React, { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LogoImage from "../../../public/images/woody-circle.svg";
import Image from "next/image";
import { Grid, useTheme } from "@mui/material";
import Link from "next/link";
import useIsMobile from "@/hooks/use-is-mobile";
import MobileDrawer from "./mobile-drawer";

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid container p={{ xs: 1, md: 2 }}>
          <Grid item xs={6} md={10} gap={5} display="flex" alignItems="center">
            <Link href="/">
              <Image
                src={LogoImage}
                height={`${isMobile ? 70 : 90}`}
                alt="Woodyland"
              />
            </Link>
            <Grid container display={{ xs: "none", md: "flex" }}>
              <Grid item display="flex" gap={3}>
                <Link href="/">
                  <Button
                    variant="text"
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: "none",
                    }}
                    size="large"
                    key={1}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography>Početna</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item display="flex" gap={3}>
                <Link href="/galerija">
                  <Button
                    variant="text"
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: "none",
                    }}
                    size="large"
                    key={1}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography>Galerija</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item display="flex" gap={3}>
                <Button
                  variant="text"
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: "none",
                  }}
                  size="large"
                  key={1}
                  onClick={handleClick}
                >
                  <Typography>Usluge</Typography>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Link
                    href="/usluge/rodjendani"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Typography variant="body1">Rođendani</Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    href="/usluge/radionice"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleClose}>Radionice</MenuItem>
                  </Link>
                  <Link
                    href="/usluge/familyday"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleClose}>Family Day</MenuItem>
                  </Link>
                </Menu>
              </Grid>
              <Grid item display="flex" gap={3}>
                <Link href="/kontakt">
                  <Button
                    variant="text"
                    sx={{
                      color: theme.palette.text.primary,
                      textTransform: "none",
                    }}
                    size="large"
                    key={1}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography>Kontakt</Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Link href="/kontakt">
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: "none" }}
              >
                Rezervišite
              </Button>
            </Link>
          </Grid>

          <Grid
            item
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <MobileDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
