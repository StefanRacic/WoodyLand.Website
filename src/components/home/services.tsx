import { Button, Container, Grid, Typography } from "@mui/material";
import { randomUUID } from "crypto";
import Image from "next/image";
import React from "react";
import BirthdayIcon from "../../../public/images/birthday.svg";
import BulbIcon from "../../../public/images/bulb.svg";
import BackyardIcon from "../../../public/images/backyard.svg";
import ClownIcon from "../../../public/images/clown.svg";

export interface Service {
  id: string;
  title: string;
  description: string;
  url: string;
  color: string;
  iconUrl: string;
}

const services: Service[] = [
  {
    id: randomUUID(),
    title: "Dečiji rođendani",
    description: `
      Održavanje dečijih rođendana je naša posebnost! Naš tim stručnih
            animatora će se pobrinuti da taj poseban dan bude nezaboravan za
            vaše dete.
      `,
    url: "/",
    color: "secondary",
    iconUrl: BirthdayIcon.src,
  },
  {
    id: randomUUID(),
    title: "Aktivne radionice",
    description: `
      Aktivne radionice koje će razvijati kreativnost, motoriku i
            socijalne veštine kod dece. Od slikanja i modeliranja, do plesa i
            muzike, naše radionice su osmišljene da pruže zabavu i edukaciju u
            isto vreme.
      `,
    url: "/",
    color: "warning",
    iconUrl: BulbIcon.src,
  },
  {
    id: randomUUID(),
    title: "Iznajmljivanje prostora",
    description: `
      Bez obzira da li organizujete korporativni događaj ili porodično
            okupljanje, naš prostor je idealan za sve vrste zabava.
      `,
    url: "/",
    color: "primary",
    iconUrl: BackyardIcon.src,
  },
  {
    id: randomUUID(),
    title: "Igraonica",
    description:
      "U Woodyland igraonici, roditelji mogu biti mirni znajući da su njihova deca na sigurnom i da se istovremeno zabavljaju i uče. Radno vreme igraonice je promenljivo usled rođendanskih termina, tako da je preporuka proveriti radno vreme putem kontakta ili instagram stranice.",
    url: "/",
    color: "error",
    iconUrl: ClownIcon.src,
  },
];

export const Services = () => {
  return (
    <Grid container p={4}>
      <Grid container p={4} spacing={6}>
        {services &&
          services.map((service) => (
            <Grid
              key={service.title}
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="space-between"
              gap={3}
            >
              <Grid container gap={4}>
                <Grid item display="flex" xs={12} alignItems="center" gap={2}>
                  <Image alt="" width={45} height={45} src={service.iconUrl} />
                  <Typography
                    variant="h5"
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    {service.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{service.description}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none", color: "white", px: 5 }}
                    color={service.color}
                    size="large"
                  >
                    Više o tome
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
