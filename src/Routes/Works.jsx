import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../CSS/Works.css";

function Works() {
  return (
    <>
      <Navbar />
      <div className="worksContainer">
        <h2>Projetos Recentes</h2>
        <p>
          <p className="textWorks">Works. </p> Explore uma coleção dos meus
          projetos mais recentes de branding, conteúdo e produto desenvolvidos
          para diferentes marcas.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Works;
