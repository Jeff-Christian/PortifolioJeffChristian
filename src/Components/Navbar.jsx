import React from "react";
import { Link } from "react-router";

import "../CSS/Navbar.css";

import logo from "../assets/CREATIVECHRISTIAN.svg";
import resume from "../assets/JéffersonChristian_desenvolvedorFullStack.pdf";

function Navbar() {
  return (
    <>
      <section className="relative-nav">
        <div className="nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Works">Projetos</Link>
              </li>
              <li>
                <a href="/news">Serviços</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
              </li>
              <li>
                <a
                  href={resume}
                  dowload="JéffersonChristian_desenvolvedorFullStack.pdf"
                  target="_blank"
                  className="resume"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <img className="logo" type="image/svg+xml" src={logo} alt="" />
        </div>
      </section>
      <section className="nav-header">
        <div className="nav-header-subtitle">
          <h2 className="name">
            <span className="name_jeff">Jéfferson</span>
            <span className="name_christian">Christian</span>
          </h2>
        </div>
        <div className="nav-header-slogan">
          <h1>
            Design e código <span>com identidade</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Navbar;
