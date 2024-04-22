"use client";
import { Button, Container, Grid, Typography } from "@mui/material";
import { randomUUID } from "crypto";
import React from "react";
import PaintbrushIcon from "../../../../public/images/extra.svg";
import BulbIcon from "../../../../public/images/bulb.svg";
import SportIcon from "../../../../public/images/sport.svg";
import Image from "next/image";
import { GalleryPreview } from "@/components/shared/galleryPreview";
import { CallToAction } from "@/components/shared/callToAction";
import ServiceBanner from "@/components/shared/serviceBanner";
import useIsMobile from "@/hooks/use-is-mobile";

interface Perk {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}
const perks: Perk[] = [
  {
    id: "1",
    title: "KREATIVNO CRTANJE I SLIKANJE",
    description:
      "Ove kreativne radionice će deci pružiti priliku da se izraze kroz slikanje, crtanje, pravljenje različitih predmeta od papira, pravljenje nakita i još mnogo toga. Naš tim će pružiti sve potrebne materijale i voditi decu kroz proces izrade svojih originalnih umetničkih dela.",
    iconUrl: PaintbrushIcon.src,
  },
  {
    id: "2",
    title: "SPORT I IGRA",
    description:
      "Ova dinamična radionica će decu uvesti u razne sportske aktivnosti i igre. Ova radionica će promovisati timski rad, spretnost i zdrav životni stil kod dece.",
    iconUrl: SportIcon.src,
  },
  {
    id: "3",
    title: "EDUKATIVNE RADIONICE",
    description:
      "Edukativne radionice u Woody Land-u su posebno osmišljene kako bi deci pružile nezaboravno iskustvo učenja i zabave. Pridružite nam se i posetite nas kako bismo zajedno pomogli deci da rastu u samopouzdane, kreativne i pametne pojedince.",
    iconUrl: BulbIcon.src,
  },
];

const WorkshopService = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <ServiceBanner
        title="Woodyland radionice"
        text="Uzbuđeni smo što možemo da vam ponudimo jedinstveno iskustvo učešća u
          raznim kreativnim i edukativnim radionicama koje su prilagođene
          različitim uzrastima i interesovanjima dece."
        backgroundColor="#FAD26C"
      />
      <Grid container p={isMobile ? 4 : 10}>
        <Grid container spacing={6}>
          {perks &&
            perks.map((perk) => (
              <Grid key={perk.id} item xs={12} md={6} display="flex">
                <Grid container gap={4}>
                  <Grid item display="flex" xs={12} alignItems="center" gap={2}>
                    <Image alt="" width={45} height={45} src={perk.iconUrl} />
                    <Typography variant="h5" textTransform="uppercase">
                      {perk.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">{perk.description}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <GalleryPreview />
      <CallToAction
        title="Čekamo vas!"
        text="Dođite i posetite nas u Woody Land-u i iskusite fantastičan svet dečije zabave! Vaša deca će obožavati naše igre i aktivnosti, a vi ćete biti mirni znajući da su u sigurnim rukama našeg posvećenog osoblja."
        buttonText="Kontakt"
        link="/kontakt"
        backgroundColor="#5B8D50"
        textColor="white"
      />
    </>
  );
};

export default WorkshopService;
