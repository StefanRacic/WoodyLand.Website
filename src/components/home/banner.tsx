import { Grid, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../public/images/banner.jpeg";

export const Banner = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Grid item xs={12} md={6} p={10}>
        <Typography variant="h3">
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
    </Grid>
  );
};
