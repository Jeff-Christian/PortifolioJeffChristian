import React from "react";
import "../CSS/Projects.css";

import AlemdomapaImage from "../assets/Além do mapa.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Alemdomapa() {
  return (
    <>
      <Navbar />
      <div className="single-project">
        <div className="colums">
          <div className="col-left">
            <div className="project-image">
              <a href="">
                <img src={AlemdomapaImage} alt="We see you" />
              </a>
            </div>
          </div>
          <div className="col-right">
            <p className="title">Além do Mapa</p>
            <p>Website</p>
            <div className="work-rows">
              <div className="work-row">
                <div className="left">
                  <p>ID</p>
                </div>
                <div className="right">
                  <p>07</p>
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
                    <li>Vite</li>
                  </ul>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Github</p>
                </div>
                <div className="right">
                  <a
                    href="https://github.com/Jeff-Christian/AlemdoMapa"
                    className="github"
                  >
                    Além do Mapa
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

export default Alemdomapa;
