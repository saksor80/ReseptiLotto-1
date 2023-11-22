import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function PopUp({ recipeRequestCount }) {
  const [open, setOpen] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  // Varmistetaan, että kun recipeRequestCount muuttuu, tarkistetaan onko se saavuttanut kolme.
  useEffect(() => {
    if (recipeRequestCount >= 4) {
      setOpen(true);
      setRandomMessage(getRandomMessage());
    }
  }, [recipeRequestCount]);

  const handleClose = () => {
    setOpen(false);
  };

  const messages = [
    "Jatkuva klikkailu kielletty!",
    "Lakkaa painelemasta minua!",
    "Sinulla ei ole oikeasti nälkä!",
    "Palataan asiaan ensi vuonna.",
    "Nyt ei arpaonni suosinut. Tänään ei syödä mitään.",
    "Sallittujen arvontojen maksimäärä ylitetty. Tilaa ruoka kotia.",
    "Eikö kelpaa, vai? No ei sitten.",
    "Paastoa nirsoilija!",
    "Hohhoijaa. Nyt ei pysty eikä kykene enää.",
    "Nyt se on loppu! Muuta ruokaa ei maailmassa ole.",
    "Keksi itse ruokasi!",
    "Et taidakaan olla ruokaa vailla…",
    "Kysy vinkkejä serkun kummin kaimalta…",
    "Jätä minut jo rauhaan!",
    "En ole mikään arpa-automaatti… Päätä itse ruokasi!",
  ];

  // Funktio, joka palauttaa satunnaisen tekstin
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  return (
    <Dialog
      sx={{ width: 350, maxWidth: "100%", mx: "auto" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Hohhoijaa!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {randomMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={handleClose}
          color="primary"
          autoFocus
        >
          Asia selvä
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp;
