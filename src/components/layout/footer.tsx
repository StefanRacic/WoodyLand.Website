"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import LogoImage from "../../../public/images/logo/woody-circle.svg";
import useIsMobile from "@/hooks/use-is-mobile";
import Link from "next/link";

export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <Box boxShadow={1}>
      <Grid container p={{ xs: 3, md: 10 }} spacing={5}>
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={1}
          md={6}
        >
          <Typography variant={isMobile ? "h4" : "h3"} pb={3}>
            Woodyland
          </Typography>
          <Typography>🏡 Šajkaška 54, Novi Sad</Typography>
          <Link
            href="tel:+381642544579"
            target="_blank"
            style={{ textDecoration: "none", color: "initial" }}
          >
            <Typography>📞 0642544579</Typography>
          </Link>
          <Link
            href="mailto:igraonica@woodyland.rs"
            target="_blank"
            style={{ textDecoration: "none", color: "initial" }}
          >
            <Typography>📧 igraonica@woodyland.rs</Typography>
          </Link>
          <Link
            href="https://www.instagram.com/woody__playandlearn/?hl=en"
            target="_blank"
            style={{ textDecoration: "none", color: "initial" }}
          >
            <Typography>📸 woody__playandlearn</Typography>
          </Link>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
          xs={12}
          md={6}
        >
          <Link href="/">
            <img src={LogoImage.src} width={isMobile ? 150 : 200} />
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" p={3}>
        <Typography variant="body1">
          © woodyland.rs {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Box>
  );
};
