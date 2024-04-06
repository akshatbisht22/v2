"use client";
import "./about.css";
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
          <img src="closemenu.png" id="menucloseimg" onClick={()=>UpdatemenuMobile(!menuMobile)}/>
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
        <div className={menuMobile ? "navbarright mobilenavright" : "navbarright"}>
          <a href="https://www.instagram.com/akshat_25.22" target="_blank">
            <img src="instagram.png" alt="navbar_right_social" />
          </a>
          <a href="https://github.com/akshatbisht22/" target="_blank">
            <img src="github.png" alt="navbar_right_social" />
          </a>
        </div>
      </div>

      <div className="about">
        <div className="abouttxt">
          <div className="abouttxthead">
            <h4>Hello, This is</h4>
            <h1>AKSHAT</h1>
            <p>welcoming you to his portfolio</p>
          </div>
          <div className="abouttxtbody">
            <h2>ABOUT ME</h2>
            <p>
              With over 4 years of programming experience, I have mastered over
              10+ languages and technologies ranging from REACT , VUE , PHP ,
              MONGO DB to C++ , C# , Python. Along with programming languages ,
              I have also acquired photo editing skills such as color grading in
              PhotoShop, Video editing in Adobe Premier Pro. I can also make
              game-ready animations and realistic models in Blender , Maya and
              AutoCad. Not only that , I had also worked with Unreal Engine 4
              and Unreal Engine 5 and Unity 3D.
            </p>
            <div className="works">
              <p>
                Checkout my works <Link href="/works">here.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
