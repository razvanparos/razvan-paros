import './Main.css';
import { Fade } from "react-awesome-reveal";

function Main() {
  return (
    <div className="main-div padding">
        <div className='main-name'>
            <p>Hello, my name is</p>
            <Fade triggerOnce="true" duration={1000}><h1>Răzvan Paroș</h1></Fade>
            <p>I'm a Frontend Developer with a passion for developing visually appealing web applications.</p>
        </div>
        
    </div>
  );
}

export default Main;
