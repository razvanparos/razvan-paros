import { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header-div padding" name='main'>
        <h2 style={{fontWeight:800,fontSize:"32px", cursor:"pointer"}}><Link activeClass='active' to='main' smooth={true} duration={500} offset={-100}>razvanparos.</Link></h2>
        <ul className='header-menu'>
            <li><Link activeClass='active' to='main' smooth={true} duration={500} offset={-100}>Home.</Link></li>
            <li><Link activeClass='active' to='skills' smooth={true} duration={500} offset={-30}>Skills.</Link></li>
            <li><Link activeClass='active' to='projects' smooth={true} duration={500} offset={30}>Projects.</Link></li>
            <li><Link activeClass='active' to='contact' smooth={true} duration={500}>Contact.</Link></li>
        </ul>
        <label class="burger" for="burger" >
          <input type="checkbox" id="burger" checked={mobileMenu} onClick={()=>{setMobileMenu(!mobileMenu)}}/>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={`dropdown ${mobileMenu ? 'open':'close'}`}>
          <ul className='header-menu-mobile'>
              <li><Link activeClass='active' to='main' smooth={true} duration={500} offset={-100} onClick={()=>{setMobileMenu(!mobileMenu)}}>Home.</Link></li>
              <li><Link activeClass='active' to='skills' smooth={true} duration={500} offset={-30} onClick={()=>{setMobileMenu(!mobileMenu)}}>Skills.</Link></li>
              <li><Link activeClass='active' to='projects' smooth={true} duration={500} offset={-50} onClick={()=>{setMobileMenu(!mobileMenu)}}>Projects.</Link></li>
              <li><Link activeClass='active' to='contact' smooth={true} duration={500} onClick={()=>{setMobileMenu(!mobileMenu)}}>Contact.</Link></li>
          </ul>
        </div>
    </header>
  );
}

export default Header;
