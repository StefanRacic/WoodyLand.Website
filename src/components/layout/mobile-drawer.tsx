import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FC, useState } from "react";
import Link from "next/link";
import {
  ArrowLeftOutlined,
  BrushOutlined,
  CameraOutlined,
  Celebration,
  ChevronLeftOutlined,
  ChevronRightRounded,
  EmailOutlined,
  HomeOutlined,
  Instagram,
  OutdoorGrillOutlined,
  PartyMode,
  PhoneOutlined,
  PhotoAlbumOutlined,
  Work,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
interface MobileDrawerProps {
  open: boolean;
  toggleDrawer(value: boolean): () => void;
}
const MobileDrawer: FC<MobileDrawerProps> = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <Typography variant="body1">Početna</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/galerija"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PhotoAlbumOutlined />
              </ListItemIcon>

              <Typography variant="body1">Galerija</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/usluge/rodjendani"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Celebration color="secondary" />
              </ListItemIcon>

              <Typography variant="body1">Rodjendani</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/usluge/radionice"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <BrushOutlined sx={{ color: "#FAD26C" }} />
              </ListItemIcon>

              <Typography variant="body1">Radionice</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/usluge/familyday"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <OutdoorGrillOutlined color="primary" />
              </ListItemIcon>

              <Typography variant="body1">Family Day</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/kontakt"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PhoneOutlined />
              </ListItemIcon>

              <Typography variant="body1">Kontakt</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
              startIcon={<PhoneOutlined />}
              href="tel:+381642544579"
            >
              0642544579
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ textTransform: "none", color: "white" }}
              startIcon={<Instagram />}
              href="https://www.instagram.com/woody__playandlearn/?hl=en"
              target="_blank"
            >
              woody__playandlearn
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
              startIcon={<EmailOutlined />}
              href="mailto:rodjendaonica@woodyland.rs"
              sx={{ backgroundColor: "#FAD26C", textTransform: "none" }}
            >
              Pošaljite email
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/kontakt" style={{ width: "100%" }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Rezerviši
              </Button>
            </Link>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Button
              variant="text"
              startIcon={<ChevronRightRounded fontSize="large" />}
              sx={{ textTransform: "none", color: "initial" }}
              onClick={toggleDrawer(false)}
            >
              Zatvori
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
};
export default MobileDrawer;
