/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDownRight, FiArrowUp, FiArrowUpRight, FiBookOpen, FiBox, FiCode, FiCompass, FiDatabase, FiGitBranch, FiGithub, FiLayers, FiLinkedin, FiLock, FiMail, FiMapPin, FiMenu, FiMessageCircle, FiPhone, FiSend, FiTrello, FiX, FiZap } from "react-icons/fi";
import profile from "../assets/profile.jpeg";

const links = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Credentials", "credentials"], ["Contact", "contact"]];
const highlights = [
  [FiBookOpen, "Education", "B.Tech, Computer Science", "Sri Venkateswara College of Engineering and Technology · 2022–2026 · CGPA 8.6"],
  [FiCode, "Focus", "Full-stack engineering", "Designing clean REST APIs, secure backend services, and responsive React interfaces."],
  [FiCompass, "Direction", "Impactful software", "Seeking a Software Engineer or Java Full Stack Developer role to build high-performance products."],
];
const skills = [
  [FiCode, "Languages", ["Java", "JavaScript", "SQL", "Python (Basic)"]],
  [FiBox, "Backend", ["Spring Boot", "Spring MVC", "Hibernate", "JPA", "JDBC", "REST APIs"]],
  [FiZap, "Frontend", ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]],
  [FiDatabase, "Data", ["MySQL", "Database Design", "CRUD Operations", "Query Optimization"]],
  [FiLock, "Security & AI", ["JWT Authentication", "RBAC", "ChatGPT API", "Prompt Engineering"]],
  [FiGitBranch, "Workflow", ["Git", "GitHub", "Maven", "Postman", "Agile", "Scrum"]],
];
const projects = [
  [FiMessageCircle, "01", "ChatKalki", "Real-Time Chat Web Application", "A full-stack real-time messaging platform designed for instant, secure communication between registered users.", ["JWT-based authentication and authorization", "REST APIs for users, chats, and messages", "MySQL-backed profiles, conversations, and chat history", "Responsive React interface with optimized services and queries"], ["React.js", "Spring Boot", "MySQL", "WebSocket", "JWT", "REST APIs"], "https://github.com/karthik2024a/Chatkalki"],
  [FiTrello, "02", "Taiga Clone", "Agile Project Management System", "A full-stack workspace for planning projects, managing sprints, and tracking work from backlog to completion.", ["Interactive Kanban workflow for task progress", "RESTful APIs for projects, sprints, users, and tasks", "Secure authentication and authorization modules", "ChatGPT API assistance for task descriptions and sprint planning"], ["React.js", "JavaScript", "Spring Boot", "MySQL", "ChatGPT API", "Git"], "https://github.com/karthik2024a/Taiga"],
];
const credentials = [
  [FiBookOpen, "L&T EduTech", "Full Stack Foundation — Core Java", "A foundation in Java programming and full-stack development concepts."],
  [FiLayers, "L&T EduTech", "UI/UX Developer Course", "Focused on creating intuitive, usable interfaces and stronger user experiences."],
  [FiZap, "DeepLearning.AI", "Prompt Engineering for Developers", "Exploring prompt patterns and practical generative AI application integration."],
];
const contacts = [[FiMail, "Email", "karthik2017a@gmail.com", "mailto:karthik2017a@gmail.com"], [FiPhone, "Phone / WhatsApp", "+91 73861 45348", "https://wa.me/917386145348"], [FiLinkedin, "LinkedIn", "linkedin.com/in/allam-karthik", "https://linkedin.com/in/allam-karthik"], [FiGithub, "GitHub", "github.com/karthik2024a", "https://github.com/karthik2024a"]];
const reveal = { hidden: { opacity: 0, y: 24 }, show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: .65, delay, ease: [0.16, 1, .3, 1] } }) };

function Progress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const update = () => { const max = document.documentElement.scrollHeight - innerHeight; setProgress(max > 0 ? scrollY / max : 0); }; update(); addEventListener("scroll", update, { passive: true }); addEventListener("resize", update); return () => { removeEventListener("scroll", update); removeEventListener("resize", update); }; }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const updateNavigation = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      const currentSection = links.reduce((current, [, id]) => {
        const section = document.getElementById(id);
        return section && section.offsetTop <= scrollPosition ? id : current;
      }, "home");

      setActiveLink(currentSection);
      setIsScrolled(window.scrollY > 16);
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}><nav className="site-nav" aria-label="Main navigation"><a className="brand" href="#home" onClick={closeMenu} aria-label="Allam Karthik home"><span>AK</span><i>.</i></a><button className="menu-toggle" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="main-menu" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <FiX /> : <FiMenu />}</button><div id="main-menu" className={`nav-links ${open ? "is-open" : ""}`}>{links.map(([name, id]) => <a key={id} href={`#${id}`} className={activeLink === id ? "is-active" : ""} aria-current={activeLink === id ? "page" : undefined} onClick={closeMenu}>{name}</a>)}<a className="nav-cta" href="mailto:karthik2017a@gmail.com" onClick={closeMenu}>Let&apos;s talk</a></div></nav></header>;
}

function Hero() {
  return <section className="hero" id="home"><div className="hero-orbit one" /><div className="hero-orbit two" /><div className="hero-container"><motion.div className="hero-copy" initial="hidden" animate="show"><motion.p className="eyebrow" variants={reveal} custom={0}><span /> Available for opportunities</motion.p><motion.h1 variants={reveal} custom={.08}>Building dependable<br />software with <em>purpose.</em></motion.h1><motion.div className="hero-role" variants={reveal} custom={.16}>I&apos;m Allam Karthik <span aria-hidden="true">—</span> <strong><TypeAnimation sequence={["Java Full Stack Developer", 1800, "Spring Boot & React Builder", 1800, "Software Engineering Student", 1800]} speed={48} repeat={Infinity} /></strong></motion.div><motion.p className="hero-desc" variants={reveal} custom={.24}>Computer Science Engineering student creating scalable web applications with Java, Spring Boot, React.js, MySQL, and REST APIs.</motion.p><motion.div className="hero-actions" variants={reveal} custom={.32}><a className="button primary" href="#projects">Explore my work <FiArrowDownRight /></a><a className="button secondary" href="mailto:karthik2017a@gmail.com">Get in touch <FiMail /></a></motion.div><motion.div className="hero-meta" variants={reveal} custom={.4}><span><FiMapPin /> Bangalore, India</span><i /><span>Open to software engineering roles</span></motion.div></motion.div><motion.aside className="hero-visual" initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .18, ease: [0.16, 1, .3, 1] }}><div className="portrait"><img src={profile} alt="Allam Karthik" /><span><b /> Building in public</span></div><div className="floating top">JAVA<br /><small>SPRING BOOT</small></div><div className="floating bottom">REACT.JS<br /><small>MYSQL <span aria-hidden="true">·</span> REST</small></div><div className="hero-socials"><a href="https://github.com/karthik2024a" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com/in/allam-karthik" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a></div></motion.aside></div><a className="scroll-cue" href="#about"><span /> Scroll to discover</a></section>;
}

function About() {
  return <section id="about" className="section about"><Kicker text="01 / About me" /><div className="split"><h2>Curious by nature.<br /><em>Deliberate in code.</em></h2><p>I&apos;m a Computer Science Engineering student with hands-on experience building full-stack applications. I turn ideas into reliable user experiences through thoughtful architecture, secure APIs, and well-crafted interfaces.</p></div><div className="about-cards">{highlights.map(([Icon, label, title, text], index) => <motion.article className="about-card" key={label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -7 }}><div><span className="icon"><Icon /></span><b>0{index + 1}</b></div><small>{label}</small><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section>;
}

function Skills() {
  return <section id="skills" className="section skills"><Kicker text="02 / Technical toolkit" /><div className="split"><h2>A practical stack for<br /><em>real product work.</em></h2><p>From object-oriented foundations to secure API integrations, my toolkit is centered on the full journey from database to browser.</p></div><div className="skills-grid">{skills.map(([Icon, name, tags], index) => <motion.article className="skill-card" key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} whileHover={{ y: -6 }}><h3><span><Icon /></span>{name}</h3><div>{tags.map((tag) => <i key={tag}>{tag}</i>)}</div></motion.article>)}</div></section>;
}

function Projects() {
  return <section id="projects" className="section projects"><Kicker text="03 / Selected work" /><div className="split"><h2>Projects built to<br /><em>solve, not just show.</em></h2><p>These are the applications where I brought backend logic, data design, security, and interface details together.</p></div><div className="projects-grid">{projects.map(([Icon, number, title, type, description, features, stack, url], index) => <motion.article className="project-card" key={title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -8 }}><header><span><Icon /></span><b>{number}</b></header><small>{type}</small><h3>{title}</h3><p>{description}</p><ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="tags">{stack.map((item) => <i key={item}>{item}</i>)}</div><a href={url} target="_blank" rel="noreferrer"><FiGithub /> View source <FiArrowUpRight /></a></motion.article>)}</div></section>;
}

function Credentials() {
  return <section id="credentials" className="section credentials"><Kicker text="04 / Credentials" /><div className="credentials-layout"><div className="credentials-copy"><h2>Always learning.<br /><em>Always shipping.</em></h2><p>I keep strengthening both my engineering fundamentals and the emerging tools that help teams build better software.</p><a href="https://linkedin.com/in/allam-karthik" target="_blank" rel="noreferrer">See my professional profile <FiArrowUpRight /></a></div><div className="credentials-list">{credentials.map(([Icon, provider, title, detail], index) => <motion.article key={title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><span><Icon /></span><div><small>{provider}</small><h3>{title}</h3><p>{detail}</p></div><b>0{index + 1}</b></motion.article>)}</div></div></section>;
}

function Contact() {
  const submit = (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const name = data.get("name"); const email = data.get("email"); const message = data.get("message"); window.location.href = `mailto:karthik2017a@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`; };
  return <section id="contact" className="section contact"><Kicker text="05 / Contact" /><div className="split"><h2>Let&apos;s build something<br /><em>worth using.</em></h2><p>Have a role, project, or idea in mind? I&apos;d be glad to hear from you.</p></div><div className="contact-grid"><div className="contact-info"><p className="location"><FiMapPin /> Based in Bangalore, Karnataka, India</p>{contacts.map(([Icon, label, value, href]) => <a href={href} className="contact-card" key={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span><Icon /></span><div><small>{label}</small><b>{value}</b></div><FiArrowUpRight /></a>)}</div><form onSubmit={submit}><header><b>Send a message</b><FiSend /></header><label>Your name<input required name="name" placeholder="What should I call you?" /></label><label>Your email<input required name="email" type="email" placeholder="you@example.com" /></label><label>Tell me a little more<textarea required name="message" rows="5" placeholder="How can we work together?" /></label><button className="button primary">Start a conversation <FiArrowUpRight /></button></form></div></section>;
}

function Kicker({ text }) { return <div className="kicker">{text}</div>; }
function Footer() { return <footer><div><a className="footer-brand" href="#home">AK<span>.</span></a><p>Designed and built by Allam Karthik.</p></div><p>© {new Date().getFullYear()} Allam Karthik. All rights reserved.</p><div className="footer-icons"><a href="https://github.com/karthik2024a" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="https://linkedin.com/in/allam-karthik" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="mailto:karthik2017a@gmail.com" aria-label="Email Allam Karthik"><FiMail /></a><a className="top" href="#home" aria-label="Back to top"><FiArrowUp /></a></div></footer>; }
export default function Portfolio() { return <div className="portfolio"><div className="page-grid" /><div className="ambient first" /><div className="ambient second" /><Progress /><Navbar /><main><Hero /><About /><Skills /><Projects /><Credentials /><Contact /></main><Footer /></div>; }
