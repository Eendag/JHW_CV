import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <><div className="App">
      <Navbar />
    </div><body>
        <section class="fwh-slide fwh-slide--bg-home" id='home'>
          <p1>
            James Uys<br></br>
            <p2>
              Software Developer & Events Photographer
            </p2>
          </p1>

        </section>
        {/*<section class="fwh-slide fwh-slide--bg-port" id='about'></section>*/}
        
        <section class="fwh-slide fwh-slide--bg-port" id="about">
          <h1>About</h1>
          <About></About>
        </section>


        <section class="fwh-slide fwh-slide--bg-exp" id='experience'>
          <p>
            <Experience></Experience>
          </p>
        </section>
        <section class="fwh-slide fwh-slide--bg-edu" id='work'>
          <p>
            <Hobbies></Hobbies>
          </p>
        </section>
        <section class="fwh-slide fwh-slide--bg-con" id='contact'>
          <p>
            <Contact></Contact>
          </p>
        </section>
      </body></>
  );
}

export default App;
