import React from "react";
import "./Weather.css";
import videoFile from "./star-bg-skycast.mp4";

export default function Weather() {
  return (
    <div className="Weather">
      <video className="videoBackground shadow-lg" autoPlay muted loop>
        <source src={videoFile} type="video/mp4"></source>
      </video>
      <form>
        <input
          type="search"
          placeholder="Enter city.."
          className="col-7"
          autoFocus={true}
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  );
}
