import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// PopUp displays a dialog with a random message when recipeRequestCount reaches 4 or more
function PopUp({ recipeRequestCount }) {

  // State for controlling dialog visibility
  const [open, setOpen] = useState(false);

  // State for storing the current random message
  const [randomMessage, setRandomMessage] = useState("");

  // Effect hook to open the dialog and set a random message when recipeRequestCount is 4 or more
  useEffect(() => {
    if (recipeRequestCount >= 4) {
      setOpen(true);
      setRandomMessage(getRandomMessage());
    }
  }, [recipeRequestCount]);

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Array of humorous messages for the dialog
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

  // Function to retrieve a random message from the messages array
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
