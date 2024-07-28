import './App.css';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
