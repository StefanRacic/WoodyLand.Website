"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import FsLightbox from "fslightbox-react";
import useIsMobile from "@/hooks/use-is-mobile";
import Link from "next/link";
import image1 from "../../../public/images/gallery/dekoracija.jpg";
import image2 from "../../../public/images/gallery/dekoracija-7.jpg";
import image3 from "../../../public/images/gallery/dekoracija-5.jpg";
import image4 from "../../../public/images/gallery/dekoracija-6.jpg";
import image5 from "../../../public/images/gallery/dekoracija-4.jpg";
import image6 from "../../../public/images/gallery/dekoracija-3.jpg";
import Image from "next/image";
import { Masonry } from "@mui/lab";

export const GalleryPreview = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  const isMobile = useIsMobile();

  const openImage = (index: number) => {
    setImageIndex(index);
    setToggler(!toggler);
  };

  const images = [
    image4.src,
    image5.src,
    image2.src,
    image1.src,
    image3.src,
    image6.src,
  ];

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
        <Grid container maxWidth="lg" justifyContent="center" py={3}>
          <Masonry
            columns={{ xs: 2, md: 3 }}
            spacing={1}
            sx={{ display: "flex" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                width="100%"
                onClick={() => openImage(index)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </Masonry>
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
