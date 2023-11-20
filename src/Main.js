import React from "react";
import "./Main.css";
import Navbar from "./Navbar";
import Weather from "./Weather";


export default function Main()
{
   return(
    <div className="main mt-5">
        <Navbar/>
        <div className="WeatherBorder mx-4">
        <Weather/>
        </div>
    </div>
   );
}