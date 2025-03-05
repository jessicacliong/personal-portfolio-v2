import './App.css'
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  
  return (
    <main className='main'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Resume />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
