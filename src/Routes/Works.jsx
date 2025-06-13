import React from "react";

import { Link } from "react-router";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../CSS/Works.css";
import Weseeyou from "../Pages/Wesseeyou";

import projeto1 from "../assets/Weseeyou.png";
import projeto2 from "../assets/Essën.png";
import projeto3 from "../assets/Emócta studio.png";
import projeto4 from "../assets/Owl Blog.png";
import projeto5 from "../assets/Anime Tracker.png";
import projeto6 from "../assets/Sentir.png";
import projeto7 from "../assets/Além do mapa.png";

function Works() {
  return (
    <>
      <Navbar />
      <div className="worksContainer">
        <h2>Projetos Recentes</h2>
        <p>
          <span className="textWorks">Works. </span> Explore uma coleção dos
          meus projetos mais recentes de branding, conteúdo e produto
          desenvolvidos para diferentes marcas.
        </p>
        <div className="projects">
          <Link to="/Works/Weseeyou">
            <div className="top">
              <div className="left">
                <p>We See You</p>
                <p className="projectType">Website</p>
              </div>
              <div className="right">
                <p className="project-number">01</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto1} alt="" />
              </div>
            </div>
          </Link>
          <Link to="/Works/Essen">
            <div className="top">
              <div className="left">
                <p>Essën</p>
                <p className="projectType">Eccomerce</p>
              </div>
              <div className="right">
                <p className="project-number">02</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto2} alt="" />
              </div>
            </div>
          </Link>
          <Link to="/Works/Emocta">
            <div className="top">
              <div className="left">
                <p>Emócta studio</p>
                <p className="projectType">Website Studio</p>
              </div>
              <div className="right">
                <p className="project-number">03</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto3} alt="" />
              </div>
            </div>
          </Link>
          <Link to="/Works/OwlBlog">
            <div className="top">
              <div className="left">
                <p>Owl Blog</p>
                <p className="projectType">Blog</p>
              </div>
              <div className="right">
                <p className="project-number">04</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto4} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="projects">
          <Link to="/Works/AnimeTracker">
            <div className="top">
              <div className="left">
                <p>Anime Tracker List</p>
                <p className="projectType">Crud</p>
              </div>
              <div className="right">
                <p className="project-number">05</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto5} alt="" />
              </div>
            </div>
          </Link>
          <Link to="/Works/Sentir">
            <div className="top">
              <div className="left">
                <p>Sentir</p>
                <p className="projectType">App Meditação</p>
              </div>
              <div className="right">
                <p className="project-number">06</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto6} alt="" />
              </div>
            </div>
          </Link>
          <Link to="/Works/Alemdomapa">
            <div className="top">
              <div className="left">
                <p>Além do Mapa</p>
                <p className="projectType">Website</p>
              </div>
              <div className="right">
                <p className="project-number">07</p>
              </div>
            </div>
            <div className="card">
              <div className="frame">
                <img src={projeto7} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Works;
