import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import Carousel from "./splash";

export default function SplashPage({ isLoaded }) {
  
  return (
    <div className="mainscreen">
      {/* <Navigation isLoaded={isLoaded} /> */}
      <Carousel></Carousel>
    </div>
  );
}
