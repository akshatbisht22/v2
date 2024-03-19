"use client";
import "./works.css";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuMobile, UpdatemenuMobile] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarleft">
        <Link href="/">
          <img src="logo-big.png" alt="head_logo" />
        </Link>
      </div>
      <div className={menuMobile ? "navbarmiddle mobilenav" : "navbarmiddle"}>
        <img
          src="closemenu.png"
          id="menucloseimg"
          onClick={() => UpdatemenuMobile(!menuMobile)}
        />
        <Link href="/about">ABOUT</Link>
        <Link href="/works">WORKS</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
      <div className="navbarrightacts">
        <img
          src="menu.png"
          id="menuOpen"
          onClick={() => UpdatemenuMobile(!menuMobile)}
        />
      </div>
      <div
        className={menuMobile ? "navbarright mobilenavright" : "navbarright"}
      >
        <a href="https://www.instagram.com/akshat_25.22" target="_blank">
          <img src="instagram.png" alt="navbar_right_social" />
        </a>
        <a href="https://github.com/akshatbisht22/" target="_blank">
          <img src="github.png" alt="navbar_right_social" />
        </a>
      </div>
    </div>
  );
}
