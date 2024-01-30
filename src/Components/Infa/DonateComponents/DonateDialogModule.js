import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DonationInput from "./DonationInput";
import PropTypes from "prop-types";

export default function DonateDialogModule(props) {
  const { open, onClose: parentOnClose, onSubmit } = props;
  const [donateAmount, setDonateAmount] = useState("");

  useEffect(() => {
    if (!open) {
      setDonateAmount("");
    }
  }, [open]);

  const submitDonation = () => {
    onSubmit(donateAmount);
    setDonateAmount("");
    parentOnClose(false);
  };

  return (
    <Dialog open={open} onClose={() => parentOnClose(false)}>
      <DialogTitle>Select How much you'd like to donate</DialogTitle>
      <DialogContent>
        <DonationInput onChange={setDonateAmount} value={donateAmount} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => parentOnClose(false)}>Close</Button>
        <Button onClick={submitDonation}>Submit Donation</Button>
      </DialogActions>
    </Dialog>
  );
}

DonateDialogModule.propTypes = {
  open: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
