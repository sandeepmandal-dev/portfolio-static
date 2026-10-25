import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const techList = project.techStack ? project.techStack.split(',').map((t) => t.trim()) : []

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl || 'https://placehold.co/600x400?text=Project'} alt={project.title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {techList.length > 0 && (
          <div className="project-tech">
            {techList.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <FaGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
