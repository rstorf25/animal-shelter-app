import React from "react";
import TopNavBar from "../Infa/TopNavBar";
import DonateButton from "../Infa/DonateComponents/DonateButton";
import HomeHeading from "../Infa/HomeHeading";

export default function HomePage() {
  const homeImgUrl =
    "https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div className="home">
      <TopNavBar />
      <HomeHeading />
      <div className="home-img-container">
        <img className="home-image" src={homeImgUrl} alt="Dog looking at you" />
      </div>

      <DonateButton />
    </div>
  );
}
