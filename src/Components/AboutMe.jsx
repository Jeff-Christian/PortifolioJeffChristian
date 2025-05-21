import React from "react";
import logoJC from "../assets/JC logo red.svg";
import illustration from "../assets/illustration jéff.png";

function AboutMe() {
  return (
    <>
      <div className="aboutContainer">
        <div className="conect">
          <div className="textConect">
            <h1>Conecte-se</h1>
            <a href="https://www.instagram.com/creativejeffchristian/">
              @creativeChristian
            </a>
            <a href="https://github.com/Jeff-Christian">Jeff-Christian</a>
            <a href="https://www.behance.net/jeffersonchristian">
              jeffersonchristian
            </a>
          </div>
          <div>
            <img className="logoJC" type="image/svg+xml" src={logoJC} alt="" />
          </div>
        </div>
        <div className="aboutMe">
          <img className="illustration" src={illustration} alt="" />
          <div className="textAbout">
            <h1>Designer e Desenvolvedor Web</h1>
            <p>
              Oie, bem vindo ao meu mundo, Sou designer e desenvolvedor web com
              foco em criação de interfaces intuitivas, responsivas e
              visualmente marcantes. Minha atuação combina design digital com
              desenvolvimento front-end, unindo estética e funcionalidade para
              oferecer experiências completas ao usuário.{" "}
            </p>
            <p>
              Tenho facilidade para colaborar em equipe, me adapto bem a
              diferentes fluxos de trabalho e sou ágil em resolver demandas
              criativas com pensamento estratégico. Prezo por entregas
              organizadas, bem estruturadas e alinhadas com os objetivos de cada
              projeto.
            </p>
            <p>
              Estou sempre buscando aprimorar minhas habilidades em UI/UX,
              acessibilidade, performance e boas práticas de desenvolvimento
              para construir soluções cada vez mais eficientes e cativantes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
