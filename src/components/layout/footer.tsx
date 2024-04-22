"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";
import LogoImage from "../../../public/images/woody-circle.svg";
import useIsMobile from "@/hooks/use-is-mobile";
import Link from "next/link";

export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <Box boxShadow={10}>
      <Grid container justifyContent="center" alignItems="center" py={6}>
        <Grid item display="flex" flexDirection="column" gap={1} md={5}>
          <Typography variant={isMobile ? "h4" : "h3"} pb={3}>
            Woodyland
          </Typography>
          <Typography>🏡 Šajkaška 54, Novi Sad</Typography>
          <Typography>📞 0642544579</Typography>
          <Typography>📧 rodjendaonica@woodyland.rs</Typography>
          <Typography>📸 woody__playandlearn</Typography>
        </Grid>
        <Grid item display="flex" justifyContent="flex-end" md={5}>
          <Link href="/">
            <img src={LogoImage.src} width={isMobile ? 150 : 200} />
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" p={3}>
        <Typography variant="body1">
          © Woodyland.rs {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Box>
  );
};
