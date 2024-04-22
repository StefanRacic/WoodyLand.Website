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
      {isMobile ? (
        <Grid
          item
          xs={12}
          md={6}
          p={15}
          sx={{
            backgroundImage: `url(${BannerImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      ) : (
        <>
          <Grid
            item
            xs={12}
            md={6}
            p={isMobile ? 6 : 10}
            sx={{
              backgroundImage: isMobile
                ? `linear-gradient(0deg, rgba(91, 141, 80, 0.2),rgba(91, 141, 80, 0.2)), url(${BannerImage.src})`
                : "",
              backgroundSize: "cover",
            }}
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
            height={600}
          ></Grid>
        </>
      )}
    </Grid>
  );
};
