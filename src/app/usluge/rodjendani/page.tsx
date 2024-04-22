"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import BackyardIcon from "../../../../public/images/backyard.svg";
import PartyIcon from "../../../../public/images/party.svg";
import PaintbrushIcon from "../../../../public/images/extra.svg";
import ClownIcon from "../../../../public/images/clown.svg";
import Image from "next/image";
import { GalleryPreview } from "@/components/shared/galleryPreview";
import { CallToAction } from "@/components/shared/callToAction";
import useIsMobile from "@/hooks/use-is-mobile";
import ServiceBanner from "@/components/shared/serviceBanner";

interface Perk {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}
const perks: Perk[] = [
  {
    id: "1",
    title: "PROSTRAN I SIGURAN PROSTOR",
    description:
      "Naša rođendaonica je opremljena prostranim i sigurnim prostorom kako bi deca mogla slobodno da se igraju i istražuju. Naša stručna ekipa će se pobrinuti da se deca osećaju bezbedno i zabavljeno tokom celog boravka u našoj rođendaonici.",
    iconUrl: BackyardIcon.src,
  },
  {
    id: "2",
    title: "RAZNOVRSNE TEMATSKE ZABAVE",
    description:
      "U Woody Land-u možete izabrati između različitih tematskih rođendanskih zabava. Bilo da je vaša dete oduševljeno princezama ili superherojima, imamo različite tematske opcije koje će odgovarati svim interesovanjima i uzrastima.",
    iconUrl: PartyIcon.src,
  },
  {
    id: "3",
    title: "PROFESIONALNI ANIMATORI",
    description:
      "Naše stručno osoblje uključuje profesionalne animatore koji će se brinuti o zabavi svih malih gostiju. Oni će animirati decu kroz igre, pesme, ples i mnoge druge aktivnosti prilagođene njihovom uzrastu i temi rođendana.",
    iconUrl: ClownIcon.src,
  },
  {
    id: "4",
    title: "DODATNE USLUGE",
    description:
      "Pored organizacije rođendanskih zabava, pružamo i dodatne usluge poput profesionalnih fotografa, šminkera za decu, balon dekora, keteringa i još mnogo toga. Sve ove usluge su dostupne da biste mogli da napravite jedinstvenu i nezaboravnu proslavu rođendana za svoje dete.",
    iconUrl: PaintbrushIcon.src,
  },
];

const BirthdaysService = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <ServiceBanner
        title="Woodyland rođendani"
        text="Mesto nezaboravnih dečijih rođendanskih zabava koje su ispunjene
          radošću, smehom i avanturama. Mi smo specijalizovani za organizaciju
          rođendanskih zabava koje će vaši mališani obožavati."
        backgroundColor="#F3A09E"
      />
      <Grid container p={isMobile ? 4 : 10}>
        <Grid container spacing={6}>
          {perks &&
            perks.map((perk) => (
              <Grid
                key={perk.title}
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="space-between"
                gap={3}
              >
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

export default BirthdaysService;
