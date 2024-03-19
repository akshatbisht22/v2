import "./works.css";
import React from "react";
import Link from "next/link";
import NavBar from "./navbar.js";

const getNotes = async () => {
  try {
    const api_url = process.env.API_URL;
    const res = await fetch(`${api_url}/api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error MongoDB", error);
  }
};

export default async function About() {
  const { topics } = await getNotes();
  return (
    <>
      <NavBar />
      <div id="works-main">
        <div id="workshead">
          <h1>WORKS</h1>
          <p>Take a look of the projects created by me.</p>
        </div>
        <div id="worksbody">
        {topics.map((t) => (
          <div className="workcont">
            <div className="workcont-img">
              <img src="folder.png" alt="folder_ico" />
            </div>
            <div className="workcont-txt">
              <h2>{t.proj_title}</h2>
              <p>{t.proj_desc}</p>
              <a target="_blank" href={t.proj_link}>
                <button>
                  <img src="view.png" />
                  View Project
                </button>
              </a>
            </div>
          </div>))}
        </div>
      </div>
    </>
  );
}
