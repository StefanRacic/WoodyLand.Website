import { Banner } from "@/components/home/banner";
import { Services } from "@/components/home/services";
import { CallToAction } from "@/components/shared/callToAction";
import { GalleryPreview } from "@/components/shared/galleryPreview";
import { ImageText } from "@/components/shared/image-text";
import { Grid, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import AirplaneImage from "../../public/images/airplane.jpeg";
import PlayroomImage from "../../public/images/woodyland-banner.jpeg";
export default function index() {
  return (
    <>
      <Banner />
      <Services />
      <ImageText
        imageLeft={true}
        title="Zašto Woodyland?"
        text="Naša igraonica je dizajnirana sa ljubavlju i pažnjom prema bezbednosti i zabavi dece. Ovde vaši mališani mogu bezbrižno da uživaju u raznim interaktivnim igrama, ljuljaškama, toboganima, loptama i još mnogo toga. Naše dvorište je savršeno za aktivnu igru na otvorenom, dok je unutrašnjost igraonice opremljena raznim igračkama i maštovitim prostorima za istraživanje."
        imageUrl={PlayroomImage.src}
      />
      <ImageText
        imageLeft={false}
        backgroundColor="#F3A09E"
        title="Mesto kvalitetne zabave"
        text="Naš cilj je da deci pružimo mesto gde mogu trčati, skakati i istraživati bezbrižno. Otvoreni prostor u Woody Land-u omogućava deci da se igraju i uče kroz aktivnu zabavu. Veliki prostor omogućava da se deca bezbrižno igraju dok odrasli odmaraju, naš tim organizatora može pomoći u kreiranju programa koji odgovara vašim potrebama."
        textColor="white"
        imageUrl={AirplaneImage.src}
      />
      <GalleryPreview />
      <CallToAction
        title="Čekamo vas!"
        text="Dođite i posetite nas u Woody Land-u i iskusite fantastičan svet dečije zabave! Vaša deca će obožavati naše igre i aktivnosti, a vi ćete biti mirni znajući da su u sigurnim rukama našeg posvećenog osoblja."
        buttonText="Kontakt"
        link="/"
        backgroundColor="#5B8D50"
        textColor="white"
      />
    </>
  );
}
