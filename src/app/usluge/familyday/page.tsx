"use client";
import React from "react";
import BulbIcon from "../../../../public/images/icons/bulb.svg";
import { GalleryPreview } from "@/components/shared/galleryPreview";
import { CallToAction } from "@/components/shared/callToAction";
import { ImageText } from "@/components/shared/image-text";
import ServiceBanner from "@/components/shared/serviceBanner";
import FamilyDay1 from "../../../../public/images/gallery/family-day-1.jpeg";
import Backyard from "../../../../public/images/gallery/dvoriste.jpeg";

interface Perk {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}

const FamilyDayService = () => {
  return (
    <>
      <ServiceBanner
        title="Family Day u Woodyland-u"
        text="Zakupite ceo prostor samo za vas.Leto je vreme za čarobne trenutke sa
          porodicom. Da bismo vam pružili savršen prostor za proslavu, veselje i
          uživanje na otvorenom, Woody Land igraonica nudi ekskluzivnu Family
          Day uslugu."
        backgroundColor="#5B8D50"
      />

      <ImageText
        imageUrl={FamilyDay1.src}
        title="Prostor za proslave"
        text="Family Day usluga uključuje i mogućnost organizacije roštilja i prostora za proslavu. Možete zakupiti posebno uređen prostor gde ćete moći da pripremate ukusne obroke na roštilju za celu porodicu. Uz naše prijateljsko osoblje, pobrinućemo se za sve vaše potrebe kako biste mogli da se maksimalno opustite, uživate u hrani i provedete vreme s najdražima."
      />
      <ImageText
        imageUrl={Backyard.src}
        text="Naša igraonica se prostire na velikom dvorištu, pružajući
          vam dovoljno prostora da provedete nezaboravno vreme sa svojom
          porodicom. Možete uživati u brojnim sadržajima kao što su Velika
          Trambolina, Ljuljaške, Tobogani, Igralište sa peskom, Fudbalsko
          igralište I još mnogo toga spremamo… Svi ovi sadržaji omogućavaju deci
          da se igraju, istražuju i provode vreme na svežem vazduhu, dok
          roditeljima pružaju mogućnost da se opuste i posmatraju svoje mališane
          kako uživaju."
        imageLeft={true}
      />
      <GalleryPreview />
      <CallToAction
        title="Rezervacija i dostupnost"
        text="Family Day usluga je dostupna tokom letnjeg perioda. Budite sigurni da će vaša proslava ili porodično okupljanje biti zaista posebna kada rezervišete ceo prostor igraonice za sebe. Za rezervacije i više informacija o cenama i dostupnosti, kontaktirajte nas direktno putem telefona, email-a, instagrama ili kontakt forme. Pridružite nam se i napravite nezaboravne uspomene sa svojim najdražima!"
        buttonText="Kontakt"
        link="/kontakt"
        backgroundColor="#5B8D50"
        textColor="white"
      />
    </>
  );
};

export default FamilyDayService;
