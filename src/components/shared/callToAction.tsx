"use client";
import useIsMobile from "@/hooks/use-is-mobile";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface CallToActionProps {
  title: string;
  text: string;
  buttonText: string;
  link: string;
  backgroundColor: string;
  textColor?: string;
}

export const CallToAction: FC<CallToActionProps> = ({
  title,
  text,
  buttonText,
  link,
  backgroundColor,
  textColor,
}) => {
  const isMobile = useIsMobile();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      p={isMobile ? 3 : 12}
      sx={{ backgroundColor: { backgroundColor } }}
      gap={isMobile ? 3 : 0}
      textAlign={isMobile ? "center" : "initial"}
    >
      <Grid
        item
        xs={12}
        md={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={3}
      >
        <Typography variant={isMobile ? "h4" : "h3"} color={textColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} display="flex" justifyContent="center">
        <Link href={link}>
          <Button
            variant="contained"
            color="inherit"
            sx={{ backgroundColor: "white", color: "black", px: 8, py: 2 }}
            size="large"
          >
            {buttonText}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
