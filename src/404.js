import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const quotes = [
    "<b>A ninja stole this page.</b><br/>You must return when the moon has friends and the fox is borrowed.",
    "<b>The page you are looking for is on vacation.</b><br/> Please try again later.",
    "<b>Oops! The page seems to have wandered off.</b><br/> Let's get you back on track.",
    "<b>This page is lost in the digital wilderness.</b><br/> Let's find a way back together.",
    "<b>404 Error: Page not found.</b><br/> Maybe it's hiding behind the pixels?",
    "<b>Oh no! The page has vanished into thin air.</b><br/> Let's summon it back with a spell.",
    "<b>This page has gone on a secret mission.</b><br/> It will return when the mission is complete.",
    "<b>Uh-oh! The page seems to have taken a wrong turn.</b><br/> Let's guide it back to the right path.",
    "<b>Page not found. It's gone on a coffee break.</b><br/> It will be back soon, refreshed and ready to go.",
    "<b>Lost in the digital labyrinth.</b><br/> Let's find the way out together.",
  ];

  const backgroundGIFs = [
    "https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif",
    "https://media.giphy.com/media/EeIX8IZvvGZ2CRCWSO/giphy.gif",
    "https://media.giphy.com/media/ppI9xMOsc43PZyO3YG/giphy.gif",
    "https://media.giphy.com/media/eiGjo84ltcjvvA7RVj/giphy.gif"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomBackgroundGIF =
    backgroundGIFs[Math.floor(Math.random() * backgroundGIFs.length)];
  return (
    <div
      style={{
        display: "flex",
        paddingBottom: "5rem",
        marginTop: "5rem",
        flexDirection: "column",
        minHeight: "80vh",
        maxHeight: "100vh",
        justifyContent: "end",
        minWidth: "0",
        color: "#dedede",
        fontSize: "16pt",
        background: `url(${randomBackgroundGIF}) no-repeat center top`,
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "30pt",
        }}
      >
        <span style={{ fontSize: "60pt" }}>404</span> - page not found
      </div>
      <div
        style={{ color: "white", textAlign: "center", marginTop: "20px" }}
        dangerouslySetInnerHTML={{ __html: randomQuote }}
      ></div>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <Link to="/">&#8592; Go back to /</Link>
      </div>
    </div>
  );
}
