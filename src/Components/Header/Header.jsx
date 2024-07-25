import './Header.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Header() {
  return (
    <div className="header-div padding">
        <h2 style={{fontWeight:800,fontSize:"32px", cursor:"pointer"}}>razvanparos.</h2>
        <ul className='header-menu'>
            <li className='menu-list-item'>HOME</li>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
        </ul>
        <div className='header-menu'>
            <a href='https://github.com/razvanparos' target='_blank' className='border'><FiGithub className='socials-icon'/></a>
            <a href='https://www.linkedin.com/in/razvanparos-frontend/' target='_blank' className='border'><FaLinkedinIn className='socials-icon'/></a>
            <a href='https://www.linkedin.com/in/razvanparos-frontend/' target='_blank' className='border'><p className='socials-icon'>CV</p></a>
        </div>
    </div>
  );
}

export default Header;
