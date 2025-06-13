import React from "react";
import "../CSS/Projects.css";

import AnimeCrud from "../assets/Anime Tracker.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function AnimeTracker() {
  return (
    <>
      <Navbar />
      <div className="single-project">
        <div className="colums">
          <div className="col-left">
            <div className="project-image">
              <a href="https://animetracker-two.vercel.app/login">
                <img src={AnimeCrud} alt="Anime Tracker List" />
              </a>
            </div>
          </div>
          <div className="col-right">
            <p className="title">Anime Tracker List</p>
            <p>Crud Aplicação</p>
            <div className="work-rows">
              <div className="work-row">
                <div className="left">
                  <p>ID</p>
                </div>
                <div className="right">
                  <p>05</p>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Ano</p>
                </div>
                <div className="right">
                  <p>2025</p>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Design</p>
                </div>
                <div className="right">
                  <p>Jéfferson Christian</p>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Serviço</p>
                </div>
                <div className="right">
                  <p>Design, Desenvolvimento</p>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Desenvolvimento</p>
                </div>
                <div className="right">
                  <ul>
                    <li>React</li>
                    <li>Node.js + Express</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Github</p>
                </div>
                <div className="right">
                  <a
                    href="https://github.com/Jeff-Christian/crud-animes-tracker-list"
                    className="github"
                  >
                    Anime Tracker List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnimeTracker;
