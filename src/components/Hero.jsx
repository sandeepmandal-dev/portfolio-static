import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const HERO_NAME = 'Sandeep Mandal'

export default function Hero() {
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      setDisplayName(HERO_NAME)
      return undefined
    }

    let timeoutId
    const animateName = (characterIndex = 0, deleting = false) => {
      const nextCharacterIndex = deleting ? characterIndex - 1 : characterIndex + 1
      setDisplayName(HERO_NAME.slice(0, Math.max(0, nextCharacterIndex)))

      if (!deleting && nextCharacterIndex < HERO_NAME.length) {
        timeoutId = window.setTimeout(() => animateName(nextCharacterIndex), 100)
      } else if (!deleting) {
        timeoutId = window.setTimeout(
          () => animateName(HERO_NAME.length, true),
          2000,
        )
      } else if (nextCharacterIndex >= 0) {
        timeoutId = window.setTimeout(
          () => animateName(nextCharacterIndex, true),
          22,
        )
      } else {
        timeoutId = window.setTimeout(() => animateName(), 250)
      }
    }

    timeoutId = window.setTimeout(() => animateName(), 300)
    return () => window.clearTimeout(timeoutId)
  }, [])

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
          <div className="hero-visual">
            <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <span className="hero-orb hero-orb-one" aria-hidden="true" />
            <span className="hero-orb hero-orb-two" aria-hidden="true" />
            <span className="hero-cube" aria-hidden="true">
              <span className="hero-cube-face hero-cube-front" />
              <span className="hero-cube-face hero-cube-back" />
              <span className="hero-cube-face hero-cube-right" />
              <span className="hero-cube-face hero-cube-left" />
              <span className="hero-cube-face hero-cube-top" />
              <span className="hero-cube-face hero-cube-bottom" />
            </span>
            <img className="hero-photo" src="/profile.png" alt="Sandeep Mandal" />
          </div>
          <p className="hero-name" aria-label={HERO_NAME} aria-live="off">
            {displayName}
          </p>
        </div>
      </div>
    </section>
  )
}
