import { Button, Grid, Typography } from "@mui/material";
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
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      p={12}
      sx={{ backgroundColor: { backgroundColor } }}
    >
      <Grid
        item
        xs={12}
        md={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
      >
        <Typography variant="h3" color={textColor} fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="inherit"
          sx={{ backgroundColor: "white", color: "black", px: 8, py: 2 }}
          href={link}
          size="large"
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};
