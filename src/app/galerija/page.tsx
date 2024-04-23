"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import FsLightbox from "fslightbox-react";
import BannerImage from "../../../public/images/banner/banner.jpeg";
import { useState } from "react";
import useIsMobile from "@/hooks/use-is-mobile";

import image1 from "../../../public/images/gallery/dekoracija.jpg";
import image2 from "../../../public/images/gallery/dekoracija-7.jpg";
import image3 from "../../../public/images/gallery/dekoracija-5.jpg";
import image4 from "../../../public/images/gallery/dekoracija-6.jpg";
import image5 from "../../../public/images/gallery/dekoracija-4.jpg";
import image6 from "../../../public/images/gallery/dekoracija-3.jpg";
import image7 from "../../../public/images/gallery/baloni-2.jpg";
import image8 from "../../../public/images/gallery/baloni.jpeg";
import image9 from "../../../public/images/gallery/dvoriste.jpeg";
import image10 from "../../../public/images/gallery/dvoriste-2.jpeg";
import image11 from "../../../public/images/gallery/loptice.jpg";
import image12 from "../../../public/images/gallery/slikarska-radionica.jpg";
import image13 from "../../../public/images/gallery/igraonica.jpeg";
import image14 from "../../../public/images/gallery/igraonica-2.jpeg";
import image15 from "../../../public/images/gallery/igraonica-3.jpeg";
import image16 from "../../../public/images/gallery/family-day-1.jpeg";
import image17 from "../../../public/images/gallery/family-day-2.jpeg";
import image18 from "../../../public/images/gallery/family-day-3.jpeg";
import image19 from "../../../public/images/gallery/family-day-4.jpeg";
import image20 from "../../../public/images/gallery/family-day-5.jpeg";
import { Masonry } from "@mui/lab";

const Gallery = () => {
  const isMobile = useIsMobile();
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  const images = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
    image7.src,
    image8.src,
    image9.src,
    image10.src,
    image11.src,
    image12.src,
    image13.src,
    image14.src,
    image15.src,
    image16.src,
    image17.src,
    image18.src,
    image19.src,
    image20.src,
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
