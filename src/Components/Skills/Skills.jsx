import './Skills.css';
import { Element } from 'react-scroll';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { SiRedux } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  return (
    <Element className="skills-div padding" name='skills'>
        <h2 className='projects-title'>Skills.</h2>
        <p>Skills and technologies I use in my projects.</p>
        <div className='skills-list'>
          <div className='skill'>
            <FaHtml5 className='icon'/>
            <p>HTML</p>
          </div>
          <div className='skill'>
            <FaCss3Alt className='icon'/>
            <p>CSS</p>
          </div>
          <div className='skill'>
            <IoLogoJavascript  className='icon'/>
            <p>JavaScript</p>
          </div>
          <div className='skill'>
            <RiTailwindCssFill className='icon'/>
            <p>Tailwind</p>
          </div>
          <div className='skill'>
            <img style={{marginBottom:'6px'}} src="data:image/svg+xml,%3csvg%20width='71'%20height='70'%20viewBox='0%200%2071%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M68.4115%202.5587e-06H1.73941C1.29822%200.000775223%200.87536%200.176579%200.563664%200.488822C0.251969%200.801064%200.0769062%201.22423%200.0769069%201.66542V68.3375C0.0765226%2068.5563%200.119338%2068.7731%200.202897%2068.9753C0.286456%2069.1775%200.409115%2069.3613%200.563839%2069.516C0.718564%2069.6707%200.902311%2069.7934%201.10454%2069.8769C1.30677%2069.9605%201.52351%2070.0033%201.74232%2070.0029H68.4144C68.6331%2070.0029%2068.8497%2069.9598%2069.0517%2069.8761C69.2538%2069.7924%2069.4374%2069.6698%2069.592%2069.5151C69.7467%2069.3605%2069.8694%2069.1769%2069.953%2068.9748C70.0367%2068.7728%2070.0798%2068.5562%2070.0798%2068.3375V1.6625C70.0794%201.4438%2070.036%201.22731%2069.9519%201.0254C69.8679%200.823486%2069.7449%200.640106%2069.59%200.485729C69.4351%200.331351%2069.2512%200.208999%2069.049%200.125658C68.8468%200.042317%2068.6302%20-0.000380799%2068.4115%202.5587e-06ZM41.7444%2037.4092H33.4115V63.3325H26.744V37.4092H18.4111V31.6663H41.7444V37.4092ZM43.6111%2061.8508V54.9237C43.6111%2054.9237%2047.3969%2057.7763%2051.9382%2057.7763C56.4794%2057.7763%2056.3044%2054.8071%2056.3044%2054.3988C56.3044%2050.0908%2043.4361%2050.0908%2043.4361%2040.5417C43.4361%2027.5567%2062.1873%2032.6813%2062.1873%2032.6813L61.954%2038.8529C61.954%2038.8529%2058.8098%2036.7558%2055.2573%2036.7558C51.7048%2036.7558%2050.4244%2038.4475%2050.4244%2040.25C50.4244%2044.9079%2063.4094%2044.4442%2063.4094%2053.8183C63.4094%2068.2558%2043.6111%2061.8538%2043.6111%2061.8538'%20fill='black'/%3e%3c/svg%3e" alt="" />
            <p>TypeScript</p>
          </div>
          <div className='skill'>
            <FaReact  className='icon'/>
            <p>React</p>
          </div>
          <div className='skill'>
            <IoLogoFirebase  className='icon'/>
            <p>Firebase</p>
          </div>
          <div className='skill'>
            <ImGithub  className='icon'/>
            <p>GitHub</p>
          </div>
        </div>
        <p>Currently learning:</p>
        <div className='skills-learn'>
          <div className='skill'>
            <SiRedux className='icon'/>
            <p>Redux</p>
          </div>
          <div className='skill'>
            <FaJava className='icon'/>
            <p>Java</p>
          </div>
          <div className='skill'>
            <SiSpringboot  className='icon'/>
            <p>SpringBoot</p>
          </div>
          <div className='skill'>
            <BiLogoPostgresql   className='icon'/>
            <p>PostgreSQL</p>
          </div>
        </div>
    </Element>
  );
}

export default Skills;
