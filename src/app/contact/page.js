"use client";
import "./contact.css";
import React, { useState } from "react";
import Link from "next/link";

export default function About() {
  const [menuMobile, UpdatemenuMobile] = useState(false);
  return (
    <>
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

      <div className="contact">
        <div className="contacttxt">
          <div className="contacttxthead">
            <h1>CONTACT</h1>
            <p>FEEL FREE TO CONTACT ME</p>
          </div>
          <div className="contacttxtbody">
            <div id="instacontact">
              <p>You can contact me through Instagram.</p>
              <h5>Username : akshat_25.22</h5>
              <a target="_blank" href="https://www.instagram.com/akshat_25.22">
                My Instagram Handle
              </a>
            </div>
            <div id="emailcontact">
              <p>You can also contact me by writing a Email.</p>
              <h4>Email : akshatb022@gmail.com</h4>
              <a target="_blank" href="mailto:akshatb022@gmail.com">
                Mail me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
