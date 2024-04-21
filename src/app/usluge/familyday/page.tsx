import { Button, Container, Grid, Typography } from "@mui/material";
import { randomUUID } from "crypto";
import React from "react";
import PaintbrushIcon from "../../../../public/images/extra.svg";
import BulbIcon from "../../../../public/images/bulb.svg";
import SportIcon from "../../../../public/images/sport.svg";
import Image from "next/image";
import { GalleryPreview } from "@/components/shared/galleryPreview";
import { CallToAction } from "@/components/shared/callToAction";
import { ImageText } from "@/components/shared/image-text";

interface Perk {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}
const perks: Perk[] = [
  {
    id: randomUUID(),
    title: "KREATIVNO CRTANJE I SLIKANJE",
    description:
      "Ove kreativne radionice će deci pružiti priliku da se izraze kroz slikanje, crtanje, pravljenje različitih predmeta od papira, pravljenje nakita i još mnogo toga. Naš tim će pružiti sve potrebne materijale i voditi decu kroz proces izrade svojih originalnih umetničkih dela.",
    iconUrl: PaintbrushIcon.src,
  },
  {
    id: randomUUID(),
    title: "SPORT I IGRA",
    description:
      "Ova dinamična radionica će decu uvesti u razne sportske aktivnosti i igre. Ova radionica će promovisati timski rad, spretnost i zdrav životni stil kod dece.",
    iconUrl: SportIcon.src,
  },
  {
    id: randomUUID(),
    title: "EDUKATIVNE RADIONICE",
    description:
      "Edukativne radionice u Woody Land-u su posebno osmišljene kako bi deci pružile nezaboravno iskustvo učenja i zabave. Pridružite nam se i posetite nas kako bismo zajedno pomogli deci da rastu u samopouzdane, kreativne i pametne pojedince.",
    iconUrl: BulbIcon.src,
  },
];

const FamilyDayService = () => {
  return (
    <>
      <Grid container p={10} sx={{ backgroundColor: "#5B8D50" }} gap={2}>
        <Typography variant="h3" color="white">
          Family Day u Woodyland-u
        </Typography>
        <Typography variant="body1" color="white">
          Zakupite ceo prostor samo za vas.Leto je vreme za čarobne trenutke sa
          porodicom. Da bismo vam pružili savršen prostor za proslavu, veselje i
          uživanje na otvorenom, Woody Land igraonica nudi ekskluzivnu Family
          Day uslugu. Naša igraonica se prostire na velikom dvorištu, pružajući
          vam dovoljno prostora da provedete nezaboravno vreme sa svojom
          porodicom. Možete uživati u brojnim sadržajima kao što su Velika
          Trambolina, Ljuljaške, Tobogani, Igralište sa peskom, Fudbalsko
          igralište I još mnogo toga spremamo… Svi ovi sadržaji omogućavaju deci
          da se igraju, istražuju i provode vreme na svežem vazduhu, dok
          roditeljima pružaju mogućnost da se opuste i posmatraju svoje mališane
          kako uživaju.
        </Typography>
      </Grid>
      <ImageText
        imageUrl={BulbIcon.src}
        title="PROSTOR ZA PROSLAVU"
        text="Family Day usluga uključuje i mogućnost organizacije roštilja i prostora za proslavu. Možete zakupiti posebno uređen prostor gde ćete moći da pripremate ukusne obroke na roštilju za celu porodicu. Uz naše prijateljsko osoblje, pobrinućemo se za sve vaše potrebe kako biste mogli da se maksimalno opustite, uživate u hrani i provedete vreme s najdražima."
      />
      <GalleryPreview />
      <CallToAction
        title="Rezervacija i dostupnost"
        text="Family Day usluga je dostupna tokom letnjeg perioda. Budite sigurni da će vaša proslava ili porodično okupljanje biti zaista posebna kada rezervišete ceo prostor igraonice za sebe. Za rezervacije i više informacija o cenama i dostupnosti, kontaktirajte nas direktno putem telefona, email-a, instagrama ili kontakt forme. Pridružite nam se i napravite nezaboravne uspomene sa svojim najdražima!"
        buttonText="Kontakt"
        link="/"
        backgroundColor="#5B8D50"
        textColor="white"
      />
    </>
  );
};

export default FamilyDayService;
