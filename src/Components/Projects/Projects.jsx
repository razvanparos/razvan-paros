import './Projects.css';
import { Element } from 'react-scroll';
import projectsList from "../../Projects.json"
import ProjectCard from '../ProjectCard/ProjectCard';
import { FiGithub } from "react-icons/fi";


function Projects() {
  return (
    <Element className="projects-div padding" name="projects">
        <h2 className='projects-title'>Projects.</h2>
        <div className='projects-viewer'>
          {projectsList.length > 0 && projectsList.map((p) => {
            return <ProjectCard key={p.id} data={p}/>
          })}
        </div>
        <h2>More projects on my GitHub</h2>
        <a href='https://github.com/razvanparos?tab=repositories' target='_blank' className='border'><FiGithub className='socials-icon'/></a>
    </Element>
  );
}

export default Projects;
