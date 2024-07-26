import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="projects-card">
        <p>{props.data.title}</p>
    </div>
  );
}

export default ProjectCard;
