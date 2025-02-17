import React from 'react'
import './App.css'
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Header from './components/header/Header';

function App() {
  
  return (
    <main className='main'>
      <Header />
      <Home />
      <Projects />
      <Skills />
    </main>
  )
}

export default App
