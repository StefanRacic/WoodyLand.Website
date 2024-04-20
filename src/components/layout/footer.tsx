"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";
import LogoImage from "../../../public/images/woody-circle.svg";

interface FooterProps {
  pages: string[];
}

export const Footer: FC<FooterProps> = ({ pages }) => {
  return (
    <Box boxShadow={10}>
      <Grid container justifyContent="center" alignItems="center" py={6}>
        <Grid item display="flex" flexDirection="column" gap={1} md={5}>
          <Typography variant="h3" fontWeight="bold" pb={3}>
            Woodyland
          </Typography>
          <Typography>🏡 Šajkaška 54, Novi Sad</Typography>
          <Typography>📞 0642544579</Typography>
          <Typography>📧 rodjendaonica@woodyland.rs</Typography>
          <Typography>📸 woody__playandlearn</Typography>
        </Grid>
        <Grid item display="flex" justifyContent="flex-end" md={5}>
          <Image alt="" src={LogoImage.src} width={200} height={200} />
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
