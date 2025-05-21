import React from "react";
import logo from "../assets/CREATIVECHRISTIANBRANCO.svg";

function Footer() {
  return (
    <>
      <footer>
        <section className="footerContainer" id="contact">
          <div>
            <img className="logo" type="image/svg+xml" src={logo} alt="" />
          </div>
          <div>
            <div className="footerContent">
              <button>Começar um projeto</button>
              <h2>jeffchristian.webdesigner@gmail.com</h2>
              <a href="https://api.whatsapp.com/send?phone=5511989259877">
                <h2>(11) 989259877</h2>
              </a>

              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/jeffersonchristians/">
                    [linkedin]
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/creativejeffchristian/">
                    [instagram]
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jeff-Christian">[github]</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
