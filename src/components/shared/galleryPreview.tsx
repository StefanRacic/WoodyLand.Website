"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { FC, useState } from "react";
import BannerImage from "../../../public/images/woodyland-banner.jpeg";
import FsLightbox from "fslightbox-react";
import useIsMobile from "@/hooks/use-is-mobile";
import Link from "next/link";

export const GalleryPreview = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  const isMobile = useIsMobile();

  const images = [
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
  ];

  const openImage = (index: number) => {
    setImageIndex(index);
    setToggler(!toggler);
  };
  return (
    <Box>
      <Grid
        container
        gap={3}
        py={isMobile ? 6 : 10}
        p={isMobile ? 3 : ""}
        justifyContent="center"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap={3}
        >
          <Typography variant={isMobile ? "h4" : "h3"}>
            Zavirite u naš svet
          </Typography>
          <Typography variant="body1">
            Zavirite u mesto nezaboravnih dečijih rođendanskih zabava koje su
            ispunjene radošću, smehom i avanturama.
          </Typography>
        </Grid>
        <Grid
          container
          maxWidth="lg"
          justifyContent="center"
          spacing={3}
          py={3}
        >
          {images.map((image, index) => (
            <Grid item xs={isMobile ? 6 : 4} key={index}>
              <img
                src={image}
                width="100%"
                onClick={() => openImage(index)}
                style={{ cursor: "pointer" }}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center">
          <Link href="/galerija">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ color: "white", px: 6 }}
            >
              Galerija
            </Button>
          </Link>
        </Grid>
      </Grid>
      <FsLightbox
        toggler={toggler}
        sources={images}
        source={images[imageIndex]}
      />
    </Box>
  );
};
