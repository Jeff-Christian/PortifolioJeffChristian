import React from "react";

function RecentProjects() {
  return (
    <>
      <div className="container-recent">
        <div className="recent-projects">
          <p>[projeto recente]</p>
          <h1>Recent Project</h1>
          <h3>Nome do Projeto</h3>
          <p>Descrição do Projeto</p>
          <div className="recent-projects-tags">
            <p>principal</p>
            <p>frame</p>
            <p>usos</p>
          </div>
          <button>
            <a href="/">Ver Detalhes</a>
          </button>
        </div>
        <div className="recent-projects-image">
          <h1>Imagem projeto</h1>
        </div>
      </div>
    </>
  );
}

export default RecentProjects;
