import './Contact.css';
import { Link } from 'react-scroll';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Contact() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    console.log(currentYear)
  return (
    <div className="contact-div padding" name='contact'>
       <div className='contact-content'>
          <div className='contact-lists'>
            <ul className='contact-menu'>
              <li>Quick Links</li>
              <li><Link activeClass='active' to='main' smooth={true} duration={500} offset={-100}>Home.</Link></li>
              <li><Link activeClass='active' to='skills' smooth={true} duration={500} offset={-30}>Skills.</Link></li>
              <li><Link activeClass='active' to='projects' smooth={true} duration={500} offset={30}>Projects.</Link></li>
            </ul>
            <ul className='contact-menu2'>
              <li>Contact</li>
              <li>razvanparos21@gmail.com</li>
              <li>+40 721474061</li>
            </ul>
            <div className='header-menu'>
              <a href='https://github.com/razvanparos' target='_blank' className='border'><FiGithub className='socials-icon'/></a>
              <a href='https://www.linkedin.com/in/razvanparos-frontend/' target='_blank' className='border'><FaLinkedinIn className='socials-icon'/></a>
              <a href='https://www.linkedin.com/in/razvanparos-frontend/overlay/1722204895839/single-media-viewer/?profileId=ACoAAD3ONOsB0zh_zefve425N3RrQJ9MUCxkXGo' target='_blank' className='border'><p className='socials-icon'>CV</p></a>
            </div>
          </div>
          <div style={{width:'100%', display:'flex',flexDirection:'column', alignItems:'center', rowGap:'12px'}}>
             <div className='contact-line'>
              <div className='line'></div>
              <p>razvanparos.</p>
              <div className='line'></div>
            </div>
            <p style={{textAlign:'center'}}>©Copyright {currentYear} | Răzvan Paroș | All rights reserved</p>
          </div>
         
       </div>
    </div>
  );
}

export default Contact;
