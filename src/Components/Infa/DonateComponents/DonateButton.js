import React, { useState } from "react";
import Button from "@mui/material/Button";
import PaidIcon from "@mui/icons-material/Paid";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DonateDialogModule from "./DonateDialogModule";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function DonateButton() {
  const [open, setOpen] = useState(false);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState("");

  function openDonateModule() {
    setOpen(true);
  }

  const closeDonateModule = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setIsSuccessAlertOpen(false);
  };

  const submitDonation = (amount) => {
    setIsSuccessAlertOpen(true);
    setDonateAmount(amount);
  };

  return (
    <div className="donate-button-container">
      <Button
        sx={{ backgroundColor: "#22CD9E" }}
        className="donate"
        size="large"
        variant="contained"
        startIcon={<VolunteerActivismIcon />}
        endIcon={<PaidIcon />}
        onClick={openDonateModule}
      >
        Donate
      </Button>

      <DonateDialogModule
        open={open}
        onClose={closeDonateModule}
        onSubmit={submitDonation}
      />

      <Snackbar
        open={isSuccessAlertOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Thank you for your donation of {donateAmount}!
        </Alert>
      </Snackbar>
    </div>
  );
}
