import { useState } from 'react'
import gitIcon from './assets/GitHub_Invertocat_White.png'
import linkedIcon from './assets/linked2.png'
import Clock from './components/Clock'
import SpotlightGrid from './components/SpotlightGrid_1'
import Typewriter from './components/Typewriter'
import Header from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.css'

function App() {
  const [view, setView] = useState('projects') // 'projects' | 'resume'

  return (
    <>
      {/* Sits behind everything (z-index: 0). .wrap below is z-index: 1. */}
      <SpotlightGrid />

      <main className="wrap">
        {/* Status line: glowing dot + location/availability.
            TODO: edit the availability text in components/Header.jsx */}
        <Header />

        <h1 className="title">Max Hunt</h1>

        <p className="role">
          Building{" "}
          <Typewriter
            className="role-accent"
            caretColor="#b6f36b"
            phrases={["full-stack apps", "ML tools", "things that work"]}
          />
        </p>

        <p className="bio">
          Currently enrolled at the University of Utah, based in Salt Lake City.
          Thanks for stopping by.
        </p>

        <div className="links">
          <a
            className="link"
            href="https://github.com/tastefulblues"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitIcon} alt="" className="link-icon" />
            GitHub
          </a>
          {/* TODO: add your real LinkedIn URL */}
          <a className="link" href="https://www.linkedin.com/in/max-j-hunt" target="_blank" rel="noreferrer">
            <img src = {linkedIcon} alt = "" className = "link-icon" />
            LinkedIn
          </a>
          <a className="link" href="mailto:hi@maxjh.dev">
            hi@maxjh.dev
          </a>
        </div>

        {/* Toggle between the two views */}
        <div className="work-toggle" role="tablist" aria-label="View">
          <button
            role="tab"
            aria-selected={view === 'projects'}
            className={view === 'projects' ? 'on' : ''}
            onClick={() => setView('projects')}
          >
            Projects
          </button>
          <button
            role="tab"
            aria-selected={view === 'resume'}
            className={view === 'resume' ? 'on' : ''}
            onClick={() => setView('resume')}
          >
            Resume
          </button>
        </div>

        {view === 'projects' ? <Projects /> : <Resume />}

        <footer className="footer mono">
          <span>Salt Lake City</span>
          <span className="footer-sep">·</span>
          <Clock />
        </footer>
      </main>
    </>
  )
}

export default App
