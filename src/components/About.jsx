 export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Full-Stack Developer specializing in Java and Spring Boot,
              with experience building web applications and REST APIs using
              React and PostgreSQL. I enjoy solving real-world problems and
              writing clean, maintainable code.
            </p>

            <p>
              I'm currently expanding my skills in Generative AI, exploring
              how AI can be integrated with Java and Spring Boot applications.
              I continuously work on improving my software engineering and
              problem-solving skills.
            </p>

            <p>
              I'm open to Software Engineer, Java Developer, Full-Stack,
              freelance, and project-based opportunities. If you have a
              project, opportunity, or idea you'd like to discuss, feel free
              to get in touch.
            </p>
          </div>

          <div className="about-stats">
            <a
              className="stat-card"
              href="https://github.com/sandeepmandal-dev"
              target="_blank"
              rel="noreferrer"
            >
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Delivered</span>
            </a>

            <a
              className="stat-card"
              href="https://leetcode.com/u/sandeep_mandal_10/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="stat-number">350+</span>
              <span className="stat-label">DSA Problems Solved</span>
            </a>

            <a className="stat-card" href="#skills">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies & Tools</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
