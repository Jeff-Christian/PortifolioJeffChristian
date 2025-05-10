import React from "react";
import "../CSS/Body.css";
import Creative from "./Creative";
import RecentProjects from "./RecentProjects";
import Services from "./Services";

function Body() {
  return (
    <>
      <Creative />
      <RecentProjects />
      <Services />
    </>
  );
}

export default Body;
