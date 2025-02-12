import "./ProjectCard.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import bank1 from "../Assets/bank1.png";
import delivery1 from "../Assets/delivery1.jpg";
import delivery2 from "../Assets/delivery2.jpg";
import delivery3 from "../Assets/delivery3.jpg";
import feedback1 from "../Assets/feedback1.jpg";
import wallet1 from "../Assets/wallet1.jpg";
import kanban1 from "../Assets/kanban1.png";
import express from "../Assets/express.png";
import blog from "../Assets/blog.jpg";
const imageMap = {
  bank1,
  delivery1,
  delivery2,
  delivery3,
  feedback1,
  wallet1,
  kanban1,
  express,
  blog
};

function ProjectCard(props) {
  return (
    <div className="projects-card">
      <div
        className="project-images"
        onClick={() => {
          window.open(props.data.live, "_blank");
        }}
      >
        <img className="project-img" src={imageMap[props.data.img1]} alt="" />
        {props.data.img2 != "" ? (
          <img className="project-img" src={imageMap[props.data.img2]} alt="" />
        ) : (
          ""
        )}
        {props.data.img3 != "" ? (
          <img className="project-img" src={imageMap[props.data.img3]} alt="" />
        ) : (
          ""
        )}
      </div>
      <div className="card-details">
        <p>{props.data.title}</p>
        <p>{props.data.description}</p>
        <div className="card-links">
          <a href={props.data.live} target="_blank">
            <FaExternalLinkAlt />
          </a>
          <a href={props.data.github} target="_blank">
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
