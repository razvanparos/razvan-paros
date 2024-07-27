import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className="header-div padding" name='main'>
        <h2 style={{fontWeight:800,fontSize:"32px", cursor:"pointer"}}><Link activeClass='active' to='main' smooth={true} duration={500} offset={-100}>razvanparos.</Link></h2>
        <ul className='header-menu'>
            <li><Link activeClass='active' to='main' smooth={true} duration={500} offset={-100}>Home.</Link></li>
            <li><Link activeClass='active' to='skills' smooth={true} duration={500} offset={-30}>Skills.</Link></li>
            <li><Link activeClass='active' to='projects' smooth={true} duration={500} offset={30}>Projects.</Link></li>
            <li><Link activeClass='active' to='contact' smooth={true} duration={500}>Contact.</Link></li>
        </ul>
    </div>
  );
}

export default Header;
