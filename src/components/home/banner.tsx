import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BannerImage from "../../../public/images/woodyland-banner.jpeg";

export const Banner = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        gap={5}
        p={4}
        my={10}
      >
        <Grid item>
          <Typography variant="h3" py={3}>
            Woodyland <br></br> mesto kvalitetne zabave.
          </Typography>
          <Button variant="contained">Rezervisite</Button>
        </Grid>
        <Grid item>
          <Image src={BannerImage} alt="Banner" width={700} />
        </Grid>
      </Grid>
    </Container>
  );
};
