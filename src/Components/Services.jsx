import React from "react";
import branding from "../assets/soltisceBranding.jpg";
import campaign from "../assets/DiadasMaes.png";
import content from "../assets/doisporum.png";
import product from "../assets/adesivos TUDUM.png";

function Services() {
  return (
    <>
      <section className="container" id="services">
        <div className="servicescontainer">
          <div>
            <h2 className="servicesTitle">Serviços</h2>
          </div>
          <div className="ServicesList">
            <div className="List">
              <div className="number">
                <h2>01</h2>
              </div>
              <div className="title">
                <h1>Branding</h1>
              </div>
              <div className="keys">
                <ul>
                  <li>identidade visual,</li>
                  <li>elementos fundamentais,</li>
                  <li>guidelines</li>
                </ul>
              </div>
              <div className="text">
                <p>
                  Eu crio identidades de marca e campanhas envolventes que se
                  conectam com o seu público-alvo — do design de logotipo à
                  experiência completa da marca. meu trabalho garante
                  consistência visual, clareza estratégica e uma presença
                  marcante em todos os pontos de contato.
                </p>
              </div>
              <div className="listImage">
                <img src={branding} alt="solstice café mockup branding" />
              </div>
            </div>
            <div className="List">
              <div className="number">
                <h2>02</h2>
              </div>
              <div className="title">
                <h1>Campanhas</h1>
              </div>
              <div className="keys">
                <ul>
                  <li>Key visuals,</li>
                  <li>kit de campanha</li>
                </ul>
              </div>
              <div className="text">
                <p>
                  Desenvolvo a identidade criativa da sua campanha — com key
                  visuals marcantes, mensagens estratégicas e peças adaptáveis
                  para todos os pontos de contato. De parcerias a eventos,
                  criamos conexões autênticas entre marcas, públicos e momentos
                  inesquecíveis.
                </p>
              </div>

              <div className="listImage">
                <img src={campaign} alt="campanha de dia das mães Vila" />
              </div>
            </div>
            <div className="List">
              <div className="number">
                <h2>03</h2>
              </div>
              <div className="title">
                <h1>Conteúdo</h1>
              </div>
              <div className="keys">
                <ul>
                  <li>Social media,</li>
                  <li>Offset, </li>
                  <li> motion e fotografia</li>
                </ul>
              </div>
              <div className="text">
                <p>
                  Crio conteúdos sob medida para cada etapa da sua estratégia —
                  desde peças gráficas até vídeos envolventes para redes sociais
                  que inspiram, engajam e geram resultados.
                </p>
              </div>

              <div className="listImage">
                <img src={content} alt="" />
              </div>
            </div>
            <div className="List">
              <div className="number">
                <h2>04</h2>
              </div>
              <div className="title">
                <h1>Produto</h1>
              </div>
              <div className="keys">
                <ul>
                  <li>Impressos,</li>
                  <li>kits, </li>
                  <li> embalagens,</li>
                  <li>brindes personalizados</li>
                </ul>
              </div>
              <div className="text">
                <p>
                  Desenvolvo produtos inovadores que unem design e
                  funcionalidade, oferecendo soluções tangíveis que fortalecem
                  sua marca e criam conexões reais com o seu público.
                </p>
              </div>

              <div className="listImage">
                <img src={product} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
