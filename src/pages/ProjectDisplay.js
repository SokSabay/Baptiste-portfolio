import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import { useEffect } from "react";
import UndoIcon from "@material-ui/icons/Undo";
import { Link } from "react-router-dom";

function ProjectDisplay() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 1, left: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <div className="titleUndo">
        <span />
        <h1>{project.name}</h1>
        <Link to="/projects">
          <UndoIcon className="undo" />
        </Link>
      </div>
      <div className="imgSize">
        <img src={project.image} />
      </div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
