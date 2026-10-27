import ProjectCard from './ProjectCard.jsx'

// Edit this array directly to add/update your projects — no backend needed.
const PROJECTS = [
  {
    id: 1,
    title: 'HRMS PORTAL',
    description: 'Full-stack HRMS covering onboarding, attendance, leave workflows and payroll for four user roles. Spring Boot and PostgreSQL backend with JWT auth, rotating refresh tokens and Flyway-managed schema; React and Tailwind front end; Dockerised.',
    techStack: 'Java, Spring Boot, Spring Security, JPA/Hibernate, PostgreSQL, Flyway, React, Vite, Tailwind CSS, Docker',
    githubUrl: 'https://github.com/sandeepmandal-dev/HRMS-Portal',
    liveUrl: 'https://taskmanager-demo.example.com',
    imageUrl: 'public/hrms-portal-cover.png',
  },
  {
    id: 2,
    title: '--Adding Soon--', //E-Commerce Platform
    description: 'Full stack project',//'Full-stack e-commerce application with product catalog, cart, checkout, and order management.',
    techStack: 'Java,Spring Boot,React,PostgreSQL,Redis',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://-demo.example.com',
    imageUrl: 'https://placehold.co/600x400?text=Demo',
  },
  {
    id: 3,
    title: 'Portfolio Website (this project)',
    description: 'Developed a modern, responsive portfolio website using React, JavaScript, Vite, Tailwind CSS, and custom CSS, featuring reusable components, smooth animations, and a clean UI to showcase my skills and projects..',
    techStack: 'React,Vite,Web3Forms,JavaScript',
    githubUrl: 'https://github.com/sandeepmandal-dev/portfolio-static',
    liveUrl: 'https://yourportfolio.example.com',
    imageUrl: 'public/portfolio-HeroImg.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
