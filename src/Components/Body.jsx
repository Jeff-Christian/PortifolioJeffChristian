import React from "react";
import "../CSS/Body.css";
import Creative from "./Creative";
import RecentProjects from "./RecentProjects";
import Services from "./Services";
import AboutMe from "./AboutMe";

function Body() {
  return (
    <>
      <AboutMe />
      <Creative />
      <RecentProjects />
    </>
  );
}

export default Body;
