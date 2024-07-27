import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="projects-card">
      <div className='project-images'>
        <img className='project-img' src={props.data.img1} alt="" />
        {props.data.img2!=""?<img className='project-img' src={props.data.img2} alt="" />:''}
        {props.data.img3!=""?<img className='project-img' src={props.data.img3} alt="" />:''}
      </div>
      
      <p>{props.data.title}</p>
    </div>
  );
}

export default ProjectCard;
