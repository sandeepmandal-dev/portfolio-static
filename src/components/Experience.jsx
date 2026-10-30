import { useEffect, useRef } from 'react'

const EXPERIENCE = [
  {
    role: 'Java Full-Stack Developer - Internship',
    company: 'KodNest',
    period: 'March-2026 — Present',
    description: `Currently pursuing a Java Full Stack Development Internship at KodNest,
     gaining hands-on experience in Java, Spring Boot, REST APIs, React.js, and database management 
     while building full-stack applications and strengthening backend and frontend development skills.`,
    technologies: ['Java', 'Spring Boot', 'React', 'HTML', 'CSS', 'JavaScript','MySQL'],
  },
  {
    role: 'Associate Software Engineering - Intern',
    company: 'Cavisson System Inc',
    period: 'May-2025 — Dec-2025',
    description: `Worked as an Associate Software Engineer at Cavisson Systems Inc.,
     resolving 10+ frontend and backend bugs and improving API documentation using Swagger and Postman.
     Streamlined development workflows with GitLab and Docker while leveraging GitHub Copilot to enhance
     development efficiency across Java Spring Boot, Angular, and PostgreSQL applications.`,
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'TypeScript','REST APIs', 'Docker', 'Swagger', 'Postman', 'GitLab', 'Linux'],
  },
  {
    role: 'Java full stack trainee - Internship',
    company: 'Wipro TalentNext',
    period: '05-2024 — 09-2024',
    description: `Completed the Wipro TalentNext Digital Skills Readiness Program in Java Full Stack Development,
     gaining hands-on experience in Core Java, Spring Boot, REST APIs, frontend technologies, SQL, and full-stack project development.`,
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Web Development - Internship',
    company: 'YHills',
    period: 'June-2023 — July-2023',
    description: `Completed a 2-month Web Development Internship at YHills in collaboration with E-Cell, IIT Hyderabad,
     gaining hands-on experience in building responsive web pages using HTML, CSS, and JavaScript. Worked on practical projects,
      strengthening frontend development skills and web design best practices.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    company: 'GIET University, Gunupur',
    period: 'Graduated: 2025',
  },
]

export default function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return undefined

    const pointerQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    let frameId = 0
    let pointerY = null

    const updateLight = () => {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        const bounds = timeline.getBoundingClientRect()
        if (bounds.height > 0) {
          const lightY = pointerY ?? window.innerHeight / 2
          const progress = Math.min(1, Math.max(0, (lightY - bounds.top) / bounds.height))
          timeline.style.setProperty('--experience-light-y', `${progress * 100}%`)
        }
        frameId = 0
      })
    }

    const updateLightFromPointer = (event) => {
      pointerY = event.clientY
      updateLight()
    }

    const updateLightFromScroll = () => {
      pointerY = null
      updateLight()
    }

    updateLight()
    window.addEventListener('scroll', updateLightFromScroll, { passive: true })
    document.addEventListener('scroll', updateLightFromScroll, { passive: true, capture: true })
    window.addEventListener('resize', updateLight, { passive: true })

    if (pointerQuery.matches) {
      timeline.addEventListener('pointermove', updateLightFromPointer, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', updateLightFromScroll)
      document.removeEventListener('scroll', updateLightFromScroll, true)
      window.removeEventListener('resize', updateLight)
      timeline.removeEventListener('pointermove', updateLightFromPointer)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section id="experience" className="section section-alt experience-section">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional experience, internships, and technical journey in software development.
        </p>

        <div className="experience-timeline" ref={timelineRef}>
          {EXPERIENCE.map((item, index) => (
            <article
              className="experience-card"
              key={`${item.company}-${item.role}-${index}`}
            >
              <p className="experience-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <p className="experience-description">{item.description}</p>
              {item.technologies?.length > 0 && (
                <ul className="experience-technologies">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
