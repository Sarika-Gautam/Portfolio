
import React from "react";
import Admin from "./Admin";
import ContactForm from "./ContactForm";
import "./index.css";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React.js",
  "Node.js", "Express.js", "MongoDB", "SQL",
  "REST APIs", "JWT Authentication", "Git", "GitHub",
  "Docker"
];

const projects = [
  {
    number: "01",
    title: "Personal Productivity Assistant",
    description:
      "A MERN stack application to organize daily tasks, manage notes, track study goals and monitor personal productivity.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    status: "Completed"
  },
  {
    number: "02",
    title: "AI Chat Application",
    description:
      "An interactive chat application with user authentication, multiple conversations and persistent chat history.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    status: "Completed"
  },
  {
    number: "03",
    title: "Dockerized SaaS Application",
    description:
      "A full-stack SaaS project focused on containerization, Docker Compose and production-oriented development.",
    tech: ["MERN", "Docker", "Docker Compose"],
    status: "In Progress"
  }
];

function App() {
  if (window.location.pathname === "/admin") {
    return <Admin />;
  }

  return (
    <div className="portfolio">

      <header className="navbar">
        <a href="#home" className="brand">
          Sarika<span>.</span>dev
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="/admin" className="admin-link">Admin</a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm <span>Sarika Gautam.</span>
              <br />
              I build things for the web.
            </h1>

            <h2>Software Developer | MERN Stack</h2>

            <p className="hero-description">
              I am a final-year Information Technology student
              passionate about building responsive, scalable and
              user-friendly web applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                Explore My Work <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                View Resume
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Sarika-Gautam"
                target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/sarika-gautam-744229320/"
                target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:sarikagautam1008@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-top">
                <span></span><span></span><span></span>
                <p>developer.js</p>
              </div>
              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="code-indent">name: <span className="code-orange">"Sarika Gautam"</span>,</p>
                <p className="code-indent">role: <span className="code-orange">"Software Developer"</span>,</p>
                <p className="code-indent">skills: [<span className="code-green">"MERN"</span>, <span className="code-green">"Docker"</span>],</p>
                <p className="code-indent">learning: <span className="code-orange">"Every day"</span>,</p>
                <p className="code-indent">passion: <span className="code-orange">"Building products"</span></p>
                <p>{"}"}</p>
                <p className="code-comment">// Turning ideas into reality.</p>
              </div>
              <div className="visual-bottom">
                <span>● Open to opportunities</span>
                <span>India</span>
              </div>
            </div>
            <div className="floating-tag tag-one">React.js</div>
            <div className="floating-tag tag-two">Node.js</div>
          </div>
        </section>

        <section className="section-container about-section" id="about">
          <div className="section-heading">
            <p className="section-label">01 / ABOUT ME</p>
            <h2>A little about <span>myself.</span></h2>
          </div>

          <div className="about-content">
            <div className="about-intro">
              <h3>Building digital experiences with code.</h3>
            </div>
            <div className="about-text">
              <p>
                I am a final-year B.Tech Information Technology student
                at Sir Chhotu Ram Institute of Science & Technology,
                CCS University.
              </p>
              <p>
                I enjoy developing full-stack web applications using
                the MERN stack. I am continuously learning, building
                projects and improving my problem-solving skills.
              </p>
              <div className="about-stats">
                <div><strong>8.64</strong><span>CGPA</span></div>
                <div><strong>2+</strong><span>Completed Projects</span></div>
                <div><strong>2027</strong><span>Graduation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">02 / TECH STACK</p>
            <h2>Tools I work <span>with.</span></h2>
            <p className="section-subtitle">
              Technologies and tools I use to build web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">03 / SELECTED WORK</p>
            <h2>Things I've <span>built.</span></h2>
            <p className="section-subtitle">
              A selection of projects showcasing my development journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className={`project-status ${project.status === "In Progress" ? "in-progress" : ""}`}>
                    {project.status}
                  </span>
                </div>

                <div className="project-icon">{"</>"}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container education-section" id="education">
          <div className="section-heading">
            <p className="section-label">04 / EDUCATION</p>
            <h2>My academic <span>background.</span></h2>
          </div>

          <div className="education-card">
            <div className="education-year">2023 — 2027</div>
            <div>
              <h3>Bachelor of Technology — Information Technology</h3>
              <p>Sir Chhotu Ram Institute of Science & Technology</p>
              <p>Chaudhary Charan Singh University, Meerut</p>
            </div>
            <div className="education-score">
              <strong>8.64</strong>
              <span>CGPA / 10</span>
            </div>
          </div>
        </section>

        <section className="section-container contact-section" id="contact">
          <div className="section-heading">
            <p className="section-label">05 / GET IN TOUCH</p>
            <h2>Let's work <span>together.</span></h2>
            <p className="section-subtitle">
              Have an opportunity or just want to say hello? Send me a message.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              <h3>Let's connect.</h3>
              <p>
                I am interested in software development opportunities,
                internships and exciting projects.
              </p>
              <a href="mailto:sarikagautam1008@gmail.com">
                sarikagautam1008@gmail.com
              </a>
              <a href="https://github.com/Sarika-Gautam"
                target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/sarika-gautam-744229320/"
                target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>

            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">Sarika<span>.</span>dev</a>
        <p>Designed & built by Sarika Gautam © {new Date().getFullYear()}</p>
        <a href="/admin" className="footer-admin">Admin Login ↗</a>
      </footer>
    </div>
  );
}

export default App;

