import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Button from "@mui/material/Button";
import RouteEnums from "../../RouteEnums";
import { useNavigate } from "react-router-dom";

export default function TopNavBar() {
  const navigate = useNavigate();
  const AppTitle = "Katya's Animal Adoption Center";
  const AnimalText = " Animals for Adoption";
  const CONTACT_US = "Contact Us";
  const HOME = "Home";

  function handleNavigate(routeEnum) {
    navigate(routeEnum);
  }

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1E7ABD", height: "65px" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handleNavigate(RouteEnums.HOME)}
          >
            <PetsIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {AppTitle}
          </Typography>

          <Button
            className="navButton"
            name="home"
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => handleNavigate(RouteEnums.HOME)}
          >
            {HOME}
          </Button>
          <Button
            className="navButton"
            color="inherit"
            startIcon={<PetsIcon />}
            onClick={() => handleNavigate(RouteEnums.ANIMALS)}
          >
            {AnimalText}
          </Button>
          <Button
            className="navButton"
            color="inherit"
            startIcon={<ContactPageIcon />}
            onClick={() => handleNavigate(RouteEnums.CONTACT)}
          >
            {CONTACT_US}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
