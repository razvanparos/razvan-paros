import './ProjectCard.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function ProjectCard(props) {
  return (
    <div className="projects-card">
      <div className='project-images'>
        <img className='project-img' src={props.data.img1} alt="" />
        {props.data.img2!=""?<img className='project-img' src={props.data.img2} alt="" />:''}
        {props.data.img3!=""?<img className='project-img' src={props.data.img3} alt="" />:''}
      </div>
      <div className='card-details'>
        <p>{props.data.title}</p>
        <p>{props.data.description}</p>
        <div className='card-links'>
          <a href={props.data.live} target='_blank'><FaExternalLinkAlt /></a>
          <a href={props.data.github} target='_blank'><IoLogoGithub /></a>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectCard;
