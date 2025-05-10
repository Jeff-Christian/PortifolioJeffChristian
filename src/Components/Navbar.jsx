import React from "react";
import "../CSS/Navbar.css";
import logo from "../assets/CREATIVECHRISTIAN.svg";

function Navbar() {
  return (
    <>
      <section className="relative-nav">
        <div className="nav">
          <nav>
            <ul>
              <li>
                <a href="/">Sobre Mim</a>
              </li>
              <li>
                <a href="/work">Projetos</a>
              </li>
              <li>
                <a href="/news">Algo</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
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
