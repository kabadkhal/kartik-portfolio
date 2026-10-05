import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Cloud,
  Server,
  Container,
  Code2,
} from "lucide-react";

import { useState } from "react";

import "./App.css";


/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div className="portfolio">


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          KB
        </a>


        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>


        <a
          href="#contact"
          className="nav-button"
        >
          Let's Talk
        </a>


        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </header>



      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero section"
      >

        <motion.div
          className="hero-content"

          initial="hidden"

          animate="visible"

          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          <motion.p
            className="eyebrow"
            variants={fadeUp}
          >
            DEVOPS & CLOUD ENGINEER
          </motion.p>


          <motion.h1 variants={fadeUp}>
            Hi, I'm <span>Kartik</span>
            <br />

            I build & automate
            <br />

            <span>
              cloud infrastructure.
            </span>
          </motion.h1>


          <motion.p
            className="hero-description"
            variants={fadeUp}
          >
            I build reliable cloud infrastructure,
            automate deployments, and create scalable
            applications using AWS, Docker,
            Kubernetes, Terraform and CI/CD.
          </motion.p>


          <motion.div
            className="hero-buttons"
            variants={fadeUp}
          >

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>


            <a
              href="/resume.pdf"
              className="secondary-button"
              download
            >
              Download Resume
              <Download size={18} />
            </a>

          </motion.div>


          <motion.div
            className="social-links"
            variants={fadeUp}
          >

            <a
              href="https://github.com/kabadkhal"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>


            <a
              href="https://www.linkedin.com/in/kabadkhal/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>


            <a
              href="mailto:kabadkhal@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

          </motion.div>

        </motion.div>



        {/* ===================================================
            TERMINAL
        =================================================== */}

        <motion.div
          className="hero-visual"

          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -3,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >

          <div className="glow"></div>


          <motion.div
            className="terminal"

            animate={{
              y: [0, -10, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="terminal-header">

              <span className="dot red"></span>

              <span className="dot yellow"></span>

              <span className="dot green-dot"></span>

              <span className="terminal-title">
                kartik@devops ~
              </span>

            </div>


            <div className="terminal-body">

              <TerminalLine command="whoami" />

              <p className="terminal-output success">
                kartik@devops:~$
                cloud-devops-engineer
              </p>


              <TerminalLine command="kubectl get pods" />

              <p className="terminal-output">
                NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                READY&nbsp;&nbsp; STATUS
              </p>

              <p className="terminal-output success">
                portfolio-app&nbsp;&nbsp;&nbsp;&nbsp;
                1/1&nbsp;&nbsp;&nbsp; Running
              </p>


              <TerminalLine command="terraform apply" />

              <p className="terminal-output">
                Plan: 8 to add, 0 to change,
                0 to destroy
              </p>

              <p className="terminal-output success">
                Apply complete!
                Infrastructure ready ✓
              </p>


              <TerminalLine command="docker ps" />

              <p className="terminal-output success">
                portfolio-container&nbsp;&nbsp;
                Up 2 hours
              </p>

            </div>

          </motion.div>

        </motion.div>

      </section>



      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="section about"
      >

        <motion.div
          className="about-content"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={fadeUp}
        >

          <p className="section-label">
            ABOUT ME
          </p>


          <h2>
            Building systems
            <br />
            that <span>scale.</span>
          </h2>


          <p className="section-description">
            I'm a DevOps Engineer focused on
            cloud infrastructure, CI/CD automation,
            containerization and Infrastructure as
            Code. I enjoy building reliable and
            scalable deployment environments.
          </p>


          <p className="section-description about-description">
            I also have experience with full-stack
            application development using React,
            Node.js and MongoDB, giving me an
            understanding of both application
            development and the infrastructure
            required to run applications.
          </p>


          <a
            href="#contact"
            className="primary-button about-button"
          >
            Let's Connect
            <ArrowUpRight size={18} />
          </a>

        </motion.div>


        <motion.div
          className="about-cards"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.15,
          }}

          variants={staggerContainer}
        >

          <AboutCard
            icon={<Cloud size={25} />}
            title="Cloud"
            text="AWS cloud infrastructure, EC2, S3, IAM, VPC and RDS."
          />


          <AboutCard
            icon={<Container size={25} />}
            title="Containers"
            text="Docker containerization and Kubernetes orchestration."
          />


          <AboutCard
            icon={<Server size={25} />}
            title="Automation"
            text="Jenkins, GitHub Actions, Terraform and Ansible automation."
          />


          <AboutCard
            icon={<Code2 size={25} />}
            title="Development"
            text="React, Node.js, REST APIs, Python and database technologies."
          />

        </motion.div>

      </section>



      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="section"
      >

        <motion.div
          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={fadeUp}
        >

          <p className="section-label">
            MY TOOLKIT
          </p>


          <h2>
            Technologies I
            <br />
            <span>work with.</span>
          </h2>


          <p className="section-description">
            A practical DevOps and Cloud technology
            stack covering infrastructure, automation,
            containerization, CI/CD, monitoring and
            application development.
          </p>

        </motion.div>


        <motion.div
          className="skills-grid"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.15,
          }}

          variants={staggerContainer}
        >

          <Skill
            name="AWS"
            category="Cloud Platform"
            icon="AWS"
          />

          <Skill
            name="Azure"
            category="Cloud Platform"
            icon="AZ"
          />

          <Skill
            name="Docker"
            category="Containerization"
            icon="DK"
          />

          <Skill
            name="Kubernetes"
            category="Orchestration"
            icon="K8s"
          />

          <Skill
            name="Jenkins"
            category="CI/CD"
            icon="J"
          />

          <Skill
            name="GitHub Actions"
            category="CI/CD Automation"
            icon="GH"
          />

          <Skill
            name="Terraform"
            category="Infrastructure as Code"
            icon="TF"
          />

          <Skill
            name="Ansible"
            category="Configuration Management"
            icon="AN"
          />

          <Skill
            name="Prometheus"
            category="Monitoring"
            icon="PM"
          />

          <Skill
            name="Grafana"
            category="Observability"
            icon="GF"
          />

          <Skill
            name="Linux"
            category="Administration"
            icon="LX"
          />

          <Skill
            name="Python"
            category="Scripting"
            icon="PY"
          />

          <Skill
            name="Bash"
            category="Shell Scripting"
            icon="SH"
          />

          <Skill
            name="Git & GitHub"
            category="Version Control"
            icon="GIT"
          />

          <Skill
            name="MySQL"
            category="Database"
            icon="SQL"
          />

          <Skill
            name="Maven"
            category="Build Tool"
            icon="MVN"
          />

        </motion.div>

      </section>



      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="section"
      >

        <motion.div
          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2,
          }}

          variants={fadeUp}
        >

          <p className="section-label">
            MY WORK
          </p>


          <h2>
            Featured
            <br />
            <span>projects.</span>
          </h2>


          <p className="section-description">
            Cloud and DevOps projects focused on
            containerization, Kubernetes orchestration,
            CI/CD automation, AWS infrastructure and
            scalable application deployment.
          </p>

        </motion.div>
        <motion.div
          className="projects-grid"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.15,
          }}

          variants={staggerContainer}
        >
          {/* =====================================================
                PROJECT 01 — JOBTRACK
            ===================================================== */}

            <Project
              number="01"
              category="FULL-STACK / NEXT.JS"
              title="JobTrack — Job Application Tracking Platform"
              description="Built and deployed a full-stack job application tracking platform using Next.js, React, TypeScript and MongoDB. Implemented authentication, job application tracking, status pipelines, dashboard statistics and a responsive interface for managing the job-search workflow."
              tags={[
                "Next.js",
                "React",
                "TypeScript",
                "MongoDB",
                "Authentication",
                "Vercel",
              ]}
              github="https://github.com/kabadkhal/JobTrack"
              live="https://job-track-flax-seven.vercel.app/"
            />

          {/* =====================================================
              PROJECT 01 — INFRAFLOW
          ===================================================== */}

          <Project
            number="02"

            category="DEVOPS / CI-CD"

            title="InfraFlow — DevOps & CI/CD Platform"

            description="Built a production-oriented DevOps implementation using Docker, Docker Compose, Traefik, PostgreSQL, LocalStack S3, GitHub Actions and Docker Hub. Implemented containerization, reverse-proxy routing, health checks, automated Docker image builds, SHA-based deployments, production deployment and rollback to a previous known-good version."

            tags={[
              "Docker",
              "Docker Compose",
              "Traefik",
              "GitHub Actions",
              "PostgreSQL",
              "LocalStack S3",
              "Docker Hub",
              "CI/CD",
            ]}

            github="https://github.com/kabadkhal/Infraflow"
          />


          {/* =====================================================
              PROJECT 02 — ZOMATO
          ===================================================== */}

          <Project
            number="03"

            category="KUBERNETES / CI-CD"

            title="Microservices Food Delivery Platform"

            description="Architected and deployed a Docker-Kubernetes food delivery platform with independently scalable microservices, service discovery, load balancing and health checks. Built a Jenkins CI/CD pipeline on AWS EC2 with automated build, testing, deployment, auto-recovery and rollback."

            tags={[
              "Docker",
              "Kubernetes",
              "Jenkins",
              "AWS EC2",
              "Microservices",
              "CI/CD",
            ]}

            github="https://github.com/kabadkhal/Zomato"
          />


          {/* =====================================================
              PROJECT 03 — BOOK MY SHOW
          ===================================================== */}

          <Project
            number="04"

            category="AWS / DEVOPS"

            title="Online Ticket Booking Application"

            description="Designed and implemented a CI/CD pipeline using Git, Jenkins, Docker and Kubernetes for a ticket booking application. The project demonstrates containerization, Kubernetes deployment and DevOps automation with AWS-based infrastructure."

            tags={[
              "AWS",
              "Jenkins",
              "Docker",
              "Kubernetes",
              "CI/CD",
              "DevOps",
            ]}

            github="https://github.com/kabadkhal/Book-My-Show"
          />


          {/* =====================================================
              PROJECT 04 — AWS 3-TIER
          ===================================================== */}

          <Project
            number="05"

            category="AWS / CLOUD"

            title="AWS 3-Tier Architecture"

            description="Deployed a scalable 3-tier web application using AWS EC2, RDS and VPC networking across presentation, logic and data layers. Configured subnet segmentation, security groups, NAT gateways and load balancers for secure and resilient inter-tier connectivity."

            tags={[
              "AWS EC2",
              "RDS",
              "VPC",
              "Load Balancer",
              "NAT Gateway",
              "Security Groups",
            ]}

            github="https://github.com/kabadkhal/3tier-aws-assignment"
          />

        </motion.div>

      </section>



      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="section experience"
      >

        <motion.div
          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}

          variants={fadeUp}
        >

          <p className="section-label">
            EXPERIENCE
          </p>


          <h2>
            My <span>journey.</span>
          </h2>

        </motion.div>


        <motion.div
          className="timeline"

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}

          variants={staggerContainer}
        >

          <TimelineItem
            date="Apr 2025 — Oct 2025"

            title="DevOps Engineer Intern — HighCatch Pvt. Ltd."

            description="Provisioned AWS infrastructure across EC2, IAM, VPC and RDS using Terraform modules. Architected scalable 3-tier AWS infrastructure with load balancing, automated configuration using Ansible, and implemented Prometheus and Grafana dashboards for application performance, resource utilization and alerting."
          />


          <TimelineItem
            date="DevOps & Cloud Engineering"

            title="Cloud Infrastructure & Automation"

            description="Hands-on work across AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible, Linux, CI/CD and monitoring, with a focus on scalable deployment and infrastructure automation."
          />

        </motion.div>

      </section>



      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="section contact"
      >

        <motion.div
          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}

          variants={fadeUp}
        >

          <p className="section-label">
            GET IN TOUCH
          </p>


          <h2>
            Let's build something
            <br />
            <span>great together.</span>
          </h2>


          <p className="section-description">
            I'm currently open to DevOps, Cloud and
            Infrastructure opportunities.
          </p>


          <a
            href="mailto:kabadkhal@gmail.com"
            className="primary-button"
          >
            Contact Me
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <p>
          © 2026 Kartik Badkhal.
          Built with React.
        </p>


        <div>

          <a
            href="https://github.com/kabadkhal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/kabadkhal/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   TERMINAL LINE
========================================================= */

function TerminalLine({ command }) {
  return (
    <p className="terminal-command">
      <span className="green">
        $
      </span>{" "}
      {command}
    </p>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

function Skill({
  name,
  category,
  icon,
}) {
  return (
    <motion.div
      className="skill-card"

      variants={fadeUp}

      whileHover={{
        y: -8,
        scale: 1.03,
      }}

      transition={{
        duration: 0.25,
      }}
    >

      <div className="skill-icon">
        {icon}
      </div>


      <div className="skill-info">

        <h3>
          {name}
        </h3>

        <p>
          {category}
        </p>

      </div>


      <ArrowUpRight
        className="skill-arrow"
        size={18}
      />

    </motion.div>
  );
}


/* =========================================================
   ABOUT CARD
========================================================= */

function AboutCard({
  icon,
  title,
  text,
}) {
  return (
    <motion.div
      className="about-card"

      variants={fadeUp}

      whileHover={{
        y: -7,
      }}
    >

      <div className="about-icon">
        {icon}
      </div>


      <h3>
        {title}
      </h3>


      <p>
        {text}
      </p>

    </motion.div>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function Project({
  number,
  category,
  title,
  description,
  tags,
  github,
  live,
}) {
  return (
    <motion.article
      className="project-card"

      variants={fadeUp}

      whileHover={{
        y: -10,
      }}

      transition={{
        duration: 0.3,
      }}
    >

      <div className="project-top">

        <span className="project-number">
          {number}
        </span>


        <span className="project-category">
          {category}
        </span>

      </div>


      <div className="project-icon">

        {number === "01" && <Container size={28} />}
        {number === "02" && <Container size={28} />}
        {number === "03" && <Server size={28} />}
        {number === "04" && <Cloud size={28} />}
        {number === "05" && <Cloud size={28} />}

      </div>


      <h3>
        {title}
      </h3>


      <p>
        {description}
      </p>


      <div className="project-tags">

        {tags.map((tag) => (
          <span key={tag}>
            {tag}
          </span>
        ))}

      </div>


      <div className="project-actions">

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-action"
        >
          <Github size={17} />
          GitHub
        </a>


        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-action"
        >
          View Project
          <ArrowUpRight size={17} />
        </a>

      </div>

    </motion.article>
  );
}


/* =========================================================
   TIMELINE
========================================================= */

function TimelineItem({
  date,
  title,
  description,
}) {
  return (
    <motion.div
      className="timeline-item"
      variants={fadeUp}
    >

      <div className="timeline-dot"></div>


      <div>

        <span className="timeline-date">
          {date}
        </span>


        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>

      </div>

    </motion.div>
  );
}


export default App;