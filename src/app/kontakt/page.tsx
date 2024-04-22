"use client";
import useIsMobile from "@/hooks/use-is-mobile";
import { useForm } from "@formspree/react";
import { Check, CheckCircle, CheckCircleOutline } from "@mui/icons-material";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkrwlwj");
  const isMobile = useIsMobile();

  return (
    <>
      <Grid
        container
        p={isMobile ? 3 : 10}
        justifyContent="space-evenly"
        gap={isMobile ? 6 : 0}
      >
        <Grid item xs={12} md={6} display="flex" flexDirection="column" gap={3}>
          <Grid container gap={3}>
            <Typography variant="h3">Kontaktirajte nas</Typography>
            <Typography variant="body1">
              Ukoliko imate bilo kakva pitanja ili želite da proverite
              dostupnost naše igraonice budite slobodni da nas kontaktirate
              putem telefona, instagrama, email-a ili popunjavanjem forme.
            </Typography>
            <Typography variant="body1">
              Vaš <b>Woodyland</b> tim! 👋
            </Typography>
          </Grid>
          <Grid container flexDirection="column" gap={2}>
            <Typography variant="h4">🏡 Šajkaška 54, Novi Sad</Typography>
            <Typography variant="h4">📞 0642544579</Typography>
            <Typography variant="h4">📧 rodjendaonica@woodyland.rs</Typography>
            <Typography variant="h4">📸 woody__playandlearn</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          pb={isMobile ? 3 : 0}
        >
          <Paper sx={{ borderRadius: 3 }} elevation={6}>
            {state.succeeded ? (
              <Grid
                container
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                justifyItems="center"
                p={4}
                height="100%"
              >
                <Typography variant="h4">Poruka uspešno poslata </Typography>
                <Typography variant="h4">🥳</Typography>
              </Grid>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container p={3} spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Vaše Ime"
                      required
                      id="name"
                      type="text"
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Vaše Prezime"
                      required
                      id="surname"
                      type="text"
                      name="surname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Vaš Email"
                      required
                      id="email"
                      type="email"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Vaš broj Telefona"
                      id="phone"
                      type="text"
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                      placeholder="Vaša Poruka"
                      id="message"
                      type="text"
                      name="message"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ px: 6, color: "white" }}
                      disabled={state.submitting}
                    >
                      Pošalji
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.799356175826!2d19.83044237630886!3d45.2720665462377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8989e13bc43be2ad%3A0x5e5b61c67760e657!2sWoody%20Land!5e0!3m2!1sen!2srs!4v1713715513354!5m2!1sen!2srs"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
    </>
  );
};

export default Contact;
