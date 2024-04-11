import { Button, Container, Grid, Typography } from "@mui/material";
import { randomUUID } from "crypto";
import React from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  url: string;
  color: string;
}

const services: Service[] = [
  {
    id: randomUUID(),
    title: "Naše usluge",
    description: `
      Održavanje dečijih rođendana je naša posebnost! Naš tim stručnih
            animatora će se pobrinuti da taj poseban dan bude nezaboravan za
            vaše dete.
      `,
    url: "/",
    color: "primary",
  },
  {
    id: randomUUID(),
    title: "Aktivne Radionice",
    description: `
      Aktivne radionice koje će razvijati kreativnost, motoriku i
            socijalne veštine kod dece. Od slikanja i modeliranja, do plesa i
            muzike, naše radionice su osmišljene da pruže zabavu i edukaciju u
            isto vreme.
      `,
    url: "/",
    color: "primary",
  },
  {
    id: randomUUID(),
    title: "Iznajmljivanje Prostora",
    description: `
      Bez obzira da li organizujete korporativni događaj ili porodično
            okupljanje, naš prostor je idealan za sve vrste zabava.
      `,
    url: "/",
    color: "primary",
  },
  {
    id: randomUUID(),
    title: "Naše usluge",
    description: `
      Održavanje dečijih rođendana je naša posebnost! Naš tim stručnih
            animatora će se pobrinuti da taj poseban dan bude nezaboravan za
            vaše dete.
      `,
    url: "/",
    color: "primary",
  },
];

export const Services = () => {
  return (
    <Container maxWidth="xl">
      <Grid container p={4} gap={5}>
        <Grid item>
          <Typography variant="h4">Naše usluge</Typography>
        </Grid>
        <Grid container xs={12} py={3}>
          {services &&
            services.map((service) => (
              <Grid
                key={service.title}
                item
                xs={3}
                px={3}
                display="flex"
                direction="column"
                justifyContent="space-between"
              >
                <Typography variant="h5">{service.title}</Typography>
                <Typography variant="body1">{service.description}</Typography>
                <Button variant="contained" color={service.color}>
                  Saznaj Više
                </Button>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};
