"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import FsLightbox from "fslightbox-react";
import BannerImage from "../../../public/images/banner.jpeg";
import { useState } from "react";
import useIsMobile from "@/hooks/use-is-mobile";

const Gallery = () => {
  const isMobile = useIsMobile();
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  const images = [
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
    BannerImage.src,
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
        justifyContent="center"
        gap={3}
        p={isMobile ? 3 : ""}
        py={isMobile ? "" : 10}
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
            <Grid item xs={12} md={4} key={index}>
              <img
                src={image}
                width="100%"
                onClick={() => openImage(index)}
                style={{ cursor: "pointer" }}
              />
            </Grid>
          ))}
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

export default Gallery;
