import React from "react";
import "../CSS/Body.css";
import Creative from "./Creative";
import RecentProjects from "./RecentProjects";
import Services from "./Services";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Body() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Creative />
      <RecentProjects />
      <Services />
      <Footer />
    </>
  );
}

export default Body;
