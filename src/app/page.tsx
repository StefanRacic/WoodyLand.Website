import { Banner } from "@/components/home/banner";
import { Services } from "@/components/home/services";
import { CallToAction } from "@/components/shared/callToAction";
import { GalleryPreview } from "@/components/shared/galleryPreview";
import { ImageText } from "@/components/shared/image-text";
import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export default function index() {
  return (
    <>
      <Banner />
      <Services />
      <ImageText
        imageLeft={true}
        title="Lorem Ipsum"
        text="Lorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor Sit"
      />
      <ImageText
        imageLeft={false}
        backgroundColor={red[100]}
        title="Lorem Ipsum"
        text="Lorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor SitLorem Ipsum Dolor Sit"
      />
      <GalleryPreview title="Lorem" text="Lorem Ipsum" />
      <CallToAction
        text="Lorem Ipsum Dolor Sit"
        buttonText="Send"
        link="/"
        backgroundColor={red[200]}
      />
    </>
  );
}
