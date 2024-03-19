"use client";
// Import React
import React, { useState } from "react";
import Link from "next/link";

// Import CSS
import "./rootcss.css";

//Components - "./components"
import Work from "./works/page.js";
import About from "./about/page.js";
import Contact from "./contact/page.js";

export default function IndexApp() {
  const [mobileNavBar, UpdatemobileNavBar] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbarleft">
          <Link href="/">
            <img src="logo-big.png" alt="head_logo" />
          </Link>
        </div>
        <div
          className={mobileNavBar ? "navbarmiddle mobilenav" : "navbarmiddle"}
        >
          <img src="closemenu.png" id="menucloseimg" onClick={()=>UpdatemobileNavBar(!mobileNavBar)}/>
          <Link href="/about">ABOUT</Link>
          <Link href="/works">WORKS</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div className="navbarrightacts">
          <img
            src="menu.png"
            id="menuOpen"
            onClick={() => UpdatemobileNavBar(!mobileNavBar)}
          />
        </div>
        <div className={mobileNavBar ? "navbarright mobilenavright" : "navbarright"}>
          <a href="https://www.instagram.com/akshat_25.22" target="_blank">
            <img src="instagram.png" alt="navbar_right_social" />
          </a>
          <a href="https://github.com/akshatbisht22/" target="_blank">
            <img src="github.png" alt="navbar_right_social" />
          </a>
        </div>
      </div>
      <div className="intro">
        <div className="introtxt">
          <h1>AKSHAT BISHT</h1>
          <p>Full-Stack web developer with over 4 years of experience.</p>
        </div>
        <div className="introbtn">
          <a target="_blank" href="https://www.instagram.com/akshat_25.22">
            <button id="insta-btn">INSTAGRAM</button>
          </a>
          <a target="_blank" href="https://github.com/akshatbisht22/">
            <button id="github-btn">GITHUB</button>
          </a>
        </div>
      </div>
    </>
  );
}
