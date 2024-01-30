import React, { useState } from "react";
import TopNavBar from "../Infa/TopNavBar";
import DonateButton from "../Infa/DonateComponents/DonateButton";
import { TextField, Typography, Button, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [isFailureAlertOpen, setIsFailureAlertOpen] = useState(false);

  const sendEmail = () => {
    const formEle = document.querySelector("form");
    emailjs
      .sendForm(
        "service_w9rbcjd",
        "template_9g00qh7",
        formEle,
        "8pOUIiUaCNPmVPhKC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessAlertOpen(true);
        },
        (error) => {
          console.log(error.text);
          setIsFailureAlertOpen(true);
        }
      );

    setContactInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  function handleOnChange(event) {
    const { name, value } = event.target;

    setContactInfo((prevVal) => {
      const updatedInfo = {
        ...prevVal,
        [name]: value,
      };

      setIsFormValid(
        updatedInfo.name.trim() !== "" &&
          updatedInfo.email.trim() !== "" &&
          updatedInfo.message.trim() !== ""
      );

      return updatedInfo;
    });
  }

  return (
    <div>
      <TopNavBar />
      <div className="contact-container">
        <div className="contact-form">
          <Typography
            variant="h3"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            {" "}
            Contact Us!
          </Typography>
          <form>
            <TextField
              label="Name"
              name="name"
              value={contactInfo.name}
              margin="normal"
              required
              onChange={handleOnChange}
            ></TextField>
            <TextField
              label="Email"
              name="email"
              value={contactInfo.email}
              margin="normal"
              required
              onChange={handleOnChange}
            ></TextField>
            <TextField
              label="Message"
              name="message"
              value={contactInfo.message}
              margin="normal"
              required
              onChange={handleOnChange}
              multiline
              rows={6}
            ></TextField>
          </form>
          <Button
            onClick={sendEmail}
            className="contact-button"
            size="large"
            variant="contained"
            color={!isFormValid ? "primary" : "success"}
            disabled={!isFormValid}
          >
            Submit
          </Button>

          <Snackbar
            open={isSuccessAlertOpen}
            autoHideDuration={6000}
            onClose={() => setIsSuccessAlertOpen(false)}
          >
            <Alert
              onClose={() => setIsSuccessAlertOpen(false)}
              severity="success"
            >
              Email sent successfully!
            </Alert>
          </Snackbar>

          <Snackbar
            open={isFailureAlertOpen}
            autoHideDuration={6000}
            onClose={() => setIsFailureAlertOpen(false)}
          >
            <Alert
              onClose={() => setIsFailureAlertOpen(false)}
              severity="error"
            >
              Error sending email. Please try again later.
            </Alert>
          </Snackbar>
        </div>
      </div>
      <DonateButton />
    </div>
  );
}
