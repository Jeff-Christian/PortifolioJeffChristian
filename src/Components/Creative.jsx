import React from "react";

function Creative() {
  return (
    <>
      <div className="creativeContainer">
        <section>
          <div className="creativeFrames">
            <div>
              <h2 className="cleancode">
                Design <br />
                criativo e <br />
                código <br />
                limpo
              </h2>
            </div>
            <div>
              <h2 className="frames">
                react/next/angular <br />
                figma/canva <br />
                photoshop/ilustrator <br />
                node/mysql wordpress
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className="textCreative">
            <div className="textdiv">
              <h3>Websites responsivos e autenticos</h3>
              <p>
                Combino design criativo e expertise técnica para dar vida a
                experiências digitais envolventes, funcionais e centradas no
                usuário, atuo com as principais ferramentas do mercado
                transformando ideias em soluções digitais únicas, sob medida
                para cada marca. entrego projetos que unem design criativo,
                estratégia UX/UI e desenvolvimento front-end moderno. Vamos
                construir algo extraordinário juntos.
              </p>
              <a href="/services  ">Explore meus serviços</a>
            </div>
            <div className="textservices">
              <h3>Design Creativo </h3>
              <ul>
                <li>Wireframes/Prototipos</li>
                <li>experiência do usuário (ux)</li>
                <li>interface usuário (ui)</li>
                <li>materiais impressos</li>
                <li>banners</li>
                <li>campanhas</li>
                <li>email marketing</li>
                <li>midias sociais</li>
              </ul>
            </div>
            <div className="textservices">
              <h3>Desenvolvimento </h3>
              <ul>
                <li>react/next.js</li>
                <li>WordPress</li>
                <li>landing pages</li>
                <li>integração com apis</li>
                <li>conexão com banco de dados</li>
                <li>dashboards</li>
                <li>versionamento</li>
                <li>manutenção e suporte</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Creative;
