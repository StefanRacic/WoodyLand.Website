import useIsMobile from "@/hooks/use-is-mobile";
import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface ServiceBannerProps {
  title: string;
  text: string;
  backgroundColor: string;
}
const ServiceBanner: FC<ServiceBannerProps> = ({
  title,
  text,
  backgroundColor,
}) => {
  const isMobile = useIsMobile();
  return (
    <Grid
      container
      p={isMobile ? 3 : 10}
      sx={{ backgroundColor: backgroundColor }}
      gap={2}
    >
      <Typography variant={isMobile ? "h4" : "h3"} color="white">
        {title}
      </Typography>
      <Typography variant="body1" color="white">
        {text}
      </Typography>
    </Grid>
  );
};

export default ServiceBanner;
