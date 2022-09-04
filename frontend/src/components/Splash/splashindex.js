import React, { useState, useEffect } from "react";
import SplashNav from "./splashnav";
import {SplashHeader} from "../SplashHeader/splashheader";
import {SearchBar} from "../Search/searchbar";

export default function SplashPage({ isLoaded }) {
  
  return (
    
    <div className="mainscreen">
      <SplashNav isLoaded={isLoaded} />
      <SplashHeader/>
      <SearchBar/>
    </div>
  );
}
