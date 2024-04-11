import { Button, Grid, Typography } from "@mui/material";
import React, { FC } from "react";

interface CallToActionProps {
  text: string;
  buttonText: string;
  link: string;
  backgroundColor: string;
}

export const CallToAction: FC<CallToActionProps> = ({
  text,
  buttonText,
  link,
  backgroundColor,
}) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      p={10}
      sx={{ backgroundColor: { backgroundColor } }}
    >
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary" href={link}>
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};
