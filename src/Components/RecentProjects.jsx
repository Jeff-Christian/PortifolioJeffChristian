import React from "react";

function RecentProjects() {
  return (
    <>
      <section className="container">
        <div className="recentproject">
          <h2>[Projeto Recente]</h2>
          <h1>Anime Tracker crud list</h1>
          <div>
            <h3>Sua lista de animes salvas</h3>
            <p>
              Uma aplicação full stack para registrar os animes assistidos, com
              informações como data, nota e onde foi assistido.
            </p>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>Node</li>
              <li>Express</li>
              <li>Mysql</li>
            </ul>
          </div>
        </div>
        <div className="imageproject"></div>
      </section>
    </>
  );
}

export default RecentProjects;
