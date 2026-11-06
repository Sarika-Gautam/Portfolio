
import Admin from "./Admin";
import ContactForm from "./ContactForm";
import "./index.css";

function App() {
  // Admin dashboard route
  if (window.location.pathname === "/admin") {
    return <Admin />;
  }

  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Express.js", "MongoDB",
    "SQL", "Git", "GitHub", "REST APIs", "Docker"
  ];

  const projects = [
    {
      name: "Personal Productivity Assistant",
      description: "A productivity tracker to manage tasks, notes and daily study goals.",
      tech: "MERN Stack • JWT Authentication",
      status: "Completed"
    },
    {
      name: "AI Chat Application",
      description: "A chat application with user authentication and conversation history.",
      tech: "React • Node.js • MongoDB • API",
      status: "Completed"
    },
    {
      name: "Dockerized SaaS Application",
      description: "A full-stack SaaS application with Docker containerization.",
      tech: "MERN Stack • Docker • Docker Compose",
      status: "In Progress"
    }
  ];

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">SG<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">Let's Talk ↗</a>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">PORTFOLIO • 2026</p>
            <p className="availability">● OPEN TO OPPORTUNITIES</p>

            <h1>
              Hello, I'm <br />
              <span>Sarika Gautam.</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              I build modern web applications with clean design,
              meaningful functionality and user-focused experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

              <a
                href="https://github.com/Sarika-Gautam"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sarika-gautam-744229320/"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                LinkedIn ↗
              </a>

              <a
                href="/resume.pdf"
                download="Sarika_Gautam_Resume.pdf"
                className="primary-btn"
              >
                Download Resume ↓
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="monogram">SG</div>
            <p>BUILDING DIGITAL EXPERIENCES</p>
            <span>DEVELOPER / CREATOR</span>
          </div>

          <div className="hero-bottom">
            <span>BASED IN INDIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>

          <h2 className="section-title">
            Turning ideas into <span>digital reality.</span>
          </h2>

          <div className="about-content">
            <p>
              I'm a final-year Information Technology student and aspiring
              software engineer passionate about full-stack development.
              I enjoy learning new technologies and building practical
              projects that solve real-world problems.
            </p>

            <div className="about-stats">
              <div><strong>8.64</strong><span>CGPA</span></div>
              <div><strong>2027</strong><span>GRADUATION</span></div>
              <div><strong>IT</strong><span>ENGINEERING</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">02 / MY TOOLKIT</p>

          <h2 className="section-title">
            Skills & <span>Technologies.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>

          <h2 className="section-title">
            Projects that <span>define me.</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <span className="project-status">{project.status}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-tech">{project.tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <p className="eyebrow">04 / EDUCATION</p>

          <h2 className="section-title">
            My learning <span>journey.</span>
          </h2>

          <div className="timeline">
            <div>
              <span>2023 — 2027</span>
              <h3>B.Tech – Information Technology</h3>
              <p>Sir Chhotu Ram Institute of Science & Technology</p>
              <p>CCS University • CGPA: 8.64/10</p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2 className="section-title">
            Have a project in <span>mind?</span>
          </h2>

          <p>Let's connect and create something meaningful together.</p>

          <p className="email">sarikagautam1008@gmail.com</p>

          <ContactForm />

        </section>
      </main>

      <footer>
        <a href="#home" className="logo">SG<span>.</span></a>

        <p>Designed & Built by Sarika Gautam © 2026</p>

        <div className="footer-links">
          <a
            href="https://github.com/Sarika-Gautam"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sarika-gautam-744229320/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
