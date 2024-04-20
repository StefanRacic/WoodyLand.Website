import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

interface ImageTextProps {
  imageLeft?: boolean;
  title?: string;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  imageUrl: string;
}
export const ImageText: FC<ImageTextProps> = ({
  imageLeft,
  title,
  text,
  backgroundColor,
  textColor,
  imageUrl,
}) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="top"
      direction={imageLeft ? "row-reverse" : "row"}
      sx={{ backgroundColor: backgroundColor ? backgroundColor : "" }}
      py={10}
    >
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        flexDirection="column"
        pt={10}
        gap={1}
      >
        <Typography variant="h3" fontWeight="bold" color={textColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} textAlign={imageLeft ? "left" : "right"}>
        <Image
          src={imageUrl}
          alt="Banner"
          width={665}
          height={395}
          style={{ borderRadius: 15 }}
        />
      </Grid>
    </Grid>
  );
};
