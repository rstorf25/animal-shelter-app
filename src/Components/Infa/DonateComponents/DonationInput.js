import React from "react";
import TextField from "@mui/material/TextField";

export default function DonationInput({ value, onChange }) {
  const handleDonationAmountChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = `$${inputValue.replace(/\D/g, "")}`;
    onChange(formattedValue);
  };

  return (
    <TextField
      id="standard-basic"
      label="Enter amount to donate"
      variant="standard"
      type="text"
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
      }}
      onChange={handleDonationAmountChange}
      value={value}
      autoComplete="off"
    />
  );
}
