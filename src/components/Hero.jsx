import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Software Engineer</p>
          <h1 className="hero-title">
            Building robust, scalable <span className="accent">web applications</span> end to end.
          </h1>
          <p className="hero-subtitle">
            Software Engineer with experience in Java,Spring Boot, React, and PostgreSQL — building
            reliable backend services and full-stack applications. Open to software engineering opportunities.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
            <a
              href="/Sandeep_Mandal.pdf"
              download
              className="btn btn-outline"
              id="resume"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/sandeepmandal-dev" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sandeep-mandal10/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:sandeepmandal1779@gmail.com" aria-label="Email"><FaEnvelope /></a>
            <a href="https://leetcode.com/u/sandeep_mandal_10/" target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          {/*
            Replace this placeholder with your real photo:
            1. Add your image file to the `public/` folder, e.g. public/profile.jpg
            2. Replace the placeholder <div> below with:
               <img src="/profile.jpg" alt="Your Name" className="hero-photo" />
          */}
          <div className="hero-photo hero-photo-placeholder">
            <img src='public/profile.png' width="100% "></img>
          </div>
          <p className="hero-name">Sandeep Mandal</p>
        </div>
      </div>
    </section>
  )
}
