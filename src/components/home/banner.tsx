"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../public/images/banner.jpeg";
import useIsMobile from "@/hooks/use-is-mobile";

export const Banner = () => {
  const isMobile = useIsMobile();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Grid
        item
        display={{ xs: "none", md: "block" }}
        xs={12}
        md={6}
        p={{ xs: 6, md: 10 }}
      >
        <Typography variant={"h1"}>
          Dobrodošli<br></br> u Woodyland<br></br> Mesto kvalitetne zabave!
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundSize: "cover",
        }}
        height={{ xs: 250, md: 600 }}
      ></Grid>
    </Grid>
  );
};
