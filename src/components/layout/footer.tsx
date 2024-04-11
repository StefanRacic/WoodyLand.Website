"use client";

import {
  CheckCircle,
  Email,
  Home,
  Instagram,
  Phone,
} from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import LogoImage from "../../../public/images/Logo.png";
import React, { FC } from "react";
import Image from "next/image";
import { theme } from "@/config/themes/theme";
import Link from "@mui/material/Link";

interface FooterProps {
  pages: string[];
}

export const Footer: FC<FooterProps> = ({ pages }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      gap={3}
      bgcolor={theme.palette.primary.light}
      color="white"
    >
      <Divider orientation="horizontal" flexItem sx={{ boxShadow: 3 }} />
      <Grid container justifyContent="center">
        <Grid item>
          <Image src={LogoImage} width={150} alt="Woodyland" />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" spacing={10} p={3}>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="end"
          gap={1}
        >
          <Home />
          <Typography variant="body2">ŠAJKAŠKA 54, NOVI SAD</Typography>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="end"
          gap={1}
        >
          <Phone />
          <Typography variant="body2">064-25-44-579</Typography>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="end"
          gap={1}
        >
          <Email />
          <Typography variant="body2">kontakt@woodyland.rs</Typography>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="end"
          gap={1}
        >
          <Link
            target="_blank"
            href="https://www.instagram.com/woody__playandlearn/"
            display="flex"
            gap={1}
          >
            <Instagram sx={{ color: "white" }} />
            <Typography
              variant="body2"
              color="white"
              sx={{ textDecoration: "none" }}
            >
              woody__playandlearn
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" p={3}>
        <Typography variant="body2">
          © Woodyland {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};
