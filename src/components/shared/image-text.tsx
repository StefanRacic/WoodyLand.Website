import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import BannerImage from "../../../public/images/woodyland-banner.jpeg";

interface ImageTextProps {
  imageLeft?: boolean;
  title?: string;
  text: string;
  backgroundColor?: string;
}
export const ImageText: FC<ImageTextProps> = ({
  imageLeft,
  title,
  text,
  backgroundColor,
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      p={4}
      my={3}
      direction={imageLeft ? "row-reverse" : "row"}
      sx={{ backgroundColor: backgroundColor ? backgroundColor : "" }}
    >
      <Grid container gap={1} xs={6}>
        <Typography variant="h3">{title}</Typography>
        <Typography>{text}</Typography>
      </Grid>
      <Grid item xs={6} textAlign={imageLeft ? "left" : "right"}>
        <Image src={BannerImage} alt="Banner" width={600} />
      </Grid>
    </Grid>
  );
};
