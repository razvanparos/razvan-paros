import './Main.css';
import { Fade, Slide } from "react-awesome-reveal";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { Element } from 'react-scroll';

function Main() {
  return (
    <Slide direction='down' triggerOnce={true} duration={1000}>
      <Element className="main-div padding" name='main'>
        <div className='main-name'>
            <p>Hello, my name is</p>
            <Fade triggerOnce="true" duration={1000}><h1><span className='name'>Răzvan</span> Paroș</h1></Fade>
            <p>I'm a Frontend Developer with a passion for developing designs into real web applications.</p>
        </div>
        <div className='header-menu2'>
            <a href='https://github.com/razvanparos' target='_blank' className='border'><FiGithub className='socials-icon'/></a>
            <a href='https://www.linkedin.com/in/razvanparos-frontend/' target='_blank' className='border'><FaLinkedinIn className='socials-icon'/></a>
            <a href='https://www.linkedin.com/in/razvanparos-frontend/overlay/1722204895839/single-media-viewer/?profileId=ACoAAD3ONOsB0zh_zefve425N3RrQJ9MUCxkXGo' target='_blank' className='border'><p className='socials-icon'>CV</p></a>
        </div>
        
    </Element>
    </Slide>
    
  );
}

export default Main;
