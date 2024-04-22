"use client";
import useIsMobile from "@/hooks/use-is-mobile";
import { Grid, Typography } from "@mui/material";
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
  const isMobile = useIsMobile();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="top"
      direction={imageLeft ? "row-reverse" : "row"}
      sx={{ backgroundColor: backgroundColor ? backgroundColor : "" }}
      py={isMobile ? 5 : 10}
    >
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        flexDirection="column"
        p={isMobile ? 3 : 0}
        pt={isMobile ? 0 : 10}
        gap={1}
      >
        <Typography variant={isMobile ? "h4" : "h3"} color={textColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {text}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        textAlign={imageLeft ? "left" : "right"}
        display="flex"
        justifyContent="center"
      >
        <img src={imageUrl} width="90%" style={{ borderRadius: 15 }} />
      </Grid>
    </Grid>
  );
};
