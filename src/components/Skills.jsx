import { FaJava, FaCss3Alt } from 'react-icons/fa'
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiApachemaven,
  SiReact,
  SiVite,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiJunit5,
  SiPostman,
  SiJsonwebtokens,
  SiSwagger,
  SiAngular,
  SiTypescript,
  SiLinux,
  SiApachetomcat,
} from 'react-icons/si'

const SKILL_GROUPS = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: FaJava},
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Spring Security', icon: SiSpringsecurity },
      { name: 'Hibernate / JPA', icon: SiHibernate },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'Apache Tomcat', icon: SiApachetomcat },
      { name: 'Swagger', icon: SiSwagger },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Angular', icon: SiAngular },
      { name: 'Vite', icon: SiVite },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: SiLinux },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'JUnit', icon: SiJunit5 },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    category: 'Auth & Security',
    skills: [
      { name: 'JWT', icon: SiJsonwebtokens },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <div className="skill-logo-grid">
                {group.skills.map(({ name, icon: Icon }) => (
                  <div key={name} className="skill-logo-item">
                    <Icon className="skill-logo-icon" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
