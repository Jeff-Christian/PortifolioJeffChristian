import React from "react";
import "../CSS/Projects.css";

import Owl from "../assets/Owl Blog.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function OwlBlog() {
  return (
    <>
      <Navbar />
      <div className="single-project">
        <div className="colums">
          <div className="col-left">
            <div className="project-image">
              <a href="https://jeff-christian.github.io/Owl-Blog/#/">
                <img src={Owl} alt="We see you" />
              </a>
            </div>
          </div>
          <div className="col-right">
            <p className="title">Owl Blog</p>
            <p>Website Blog</p>
            <div className="work-rows">
              <div className="work-row">
                <div className="left">
                  <p>ID</p>
                </div>
                <div className="right">
                  <p>04</p>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Ano</p>
                </div>
                <div className="right">
                  <p>2022</p>
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
                  <p>Desenvolvimento</p>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Desenvolvimento</p>
                </div>
                <div className="right">
                  <ul>
                    <li>React</li>
                    <li>Node.js + Express</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
              <div className="work-row">
                <div className="left">
                  <p>Github</p>
                </div>
                <div className="right">
                  <a
                    href="https://github.com/Jeff-Christian/Owl-Blog"
                    className="github"
                  >
                    Owl Blog
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

export default OwlBlog;
