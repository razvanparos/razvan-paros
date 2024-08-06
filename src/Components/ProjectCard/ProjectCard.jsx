import './ProjectCard.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import bankpick1 from '../Assets/bankpick1.jpg'
import bankpick2 from '../Assets/bankpick2.jpg'
import bankpick3 from '../Assets/bankpick3.jpg'
import delivery1 from '../Assets/delivery1.jpg'
import delivery2 from '../Assets/delivery2.jpg'
import delivery3 from '../Assets/delivery3.jpg'
import ent1 from '../Assets/ent1.jpg'
import feedback1 from '../Assets/feedback1.jpg'
import wallet1 from '../Assets/wallet1.jpg'
import auto1 from '../Assets/auto1.jpg'
import kanban1 from '../Assets/kanban1.png'
const imageMap = {
  bankpick1,
  bankpick2,
  bankpick3,
  delivery1,
  delivery2,
  delivery3,
  ent1,
  feedback1,
  wallet1,
  auto1,
  kanban1
};

function ProjectCard(props) {
  return (
    <div className="projects-card">
      <div className='project-images'>
        <img className='project-img' src={imageMap[props.data.img1] } alt="" />
        {props.data.img2!=""?<img className='project-img' src={imageMap[props.data.img2]} alt="" />:''}
        {props.data.img3!=""?<img className='project-img' src={imageMap[props.data.img3]} alt="" />:''}
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
