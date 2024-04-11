"use client";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC, useState } from "react";
import BannerImage from "../../../public/images/woodyland-banner.jpeg";
import FsLightbox from "fslightbox-react";

interface GalleryProps {
  title?: string;
  text?: string;
}

export const GalleryPreview: FC<GalleryProps> = ({ title, text }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);

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
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap={3}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid container spacing={3} py={3}>
        {images.map((image, index) => (
          <Grid item xs={4} key={index}>
            <img src={image} width="100%" onClick={() => openImage(index)} />
          </Grid>
        ))}
      </Grid>
      <FsLightbox
        toggler={toggler}
        sources={images}
        source={images[imageIndex]}
      />
    </Container>
  );
};
