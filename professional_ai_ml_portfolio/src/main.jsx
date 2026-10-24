import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Code2, Database, Github,
  Linkedin, Mail, Menu, Sparkles, Workflow, Layers3, FileSearch,
  ScanText, Bot, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "AI & Machine Learning", icon: BrainCircuit, items: ["Python", "Scikit-learn", "Model Evaluation", "Feature Engineering"] },
  { title: "Generative AI", icon: Sparkles, items: ["LLMs", "RAG", "LangGraph", "Prompt Design"] },
  { title: "Backend & APIs", icon: Code2, items: ["FastAPI", "REST APIs", "Python Services", "API Integration"] },
  { title: "Data & Storage", icon: Database, items: ["Supabase", "SQL", "Data Preprocessing", "Knowledge Bases"] },
];

const projects = [
  {
    number: "01",
    title: "AI Chatbot & Knowledge Assistant",
    category: "Generative AI · RAG",
    description: "A knowledge assistant designed to answer questions from company information, with a conversational workflow and multilingual support.",
    tags: ["FastAPI", "LangGraph", "RAG", "Supabase"],
    icon: Bot,
    accent: "violet",
  },
  {
    number: "02",
    title: "AI Project Memory Graph",
    category: "Developer Tools · AI",
    description: "A project explorer concept that maps code relationships, helps locate where features are implemented, and highlights files that may be affected by a change.",
    tags: ["Python", "AST", "NetworkX", "React"],
    icon: Workflow,
    accent: "blue",
  },
  {
    number: "03",
    title: "Skill Matching Engine",
    category: "Machine Learning · NLP",
    description: "A matching system that compares skills and task requirements to help connect people with suitable work and learning resources.",
    tags: ["FastAPI", "Embeddings", "BGE", "Supabase"],
    icon: Layers3,
    accent: "mint",
  },
  {
    number: "04",
    title: "AI Business Card Scanner",
    category: "Computer Vision · Automation",
    description: "An application concept for extracting useful contact details from business cards and organizing the captured information.",
    tags: ["Next.js", "FastAPI", "Gemini", "Supabase"],
    icon: ScanText,
    accent: "orange",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to home"><span className="brand-mark">M</span><span>Portfolio<span className="brand-dot">.</span></span></a>
        <nav className="nav-links">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div className="availability" variants={fadeUp}><span className="status-dot" /> AI/ML Developer · Open to opportunities</motion.div>
            <motion.p className="eyebrow" variants={fadeUp}>HELLO, I'M A DEVELOPER</motion.p>
            <motion.h1 variants={fadeUp}>Building useful things with <span className="gradient-text">AI & code.</span></motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>I turn ideas into practical applications using machine learning, generative AI, and reliable backend systems.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact"><Mail size={16} /> Contact me</a>
            </motion.div>
            <motion.div className="hero-meta" variants={fadeUp}>
              <span><span className="meta-line" /> Python-first development</span>
              <span><span className="meta-line" /> AI-powered solutions</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="visual-card">
              <div className="visual-card-top"><span className="window-dots"><i /><i /><i /></span><span className="terminal-label">developer.profile</span><span className="live-label">LIVE</span></div>
              <div className="code-lines">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp; focus: <span className="code-green">"AI/ML"</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; build: <span className="code-green">"real solutions"</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; learn: <span className="code-green">"every day"</span></p>
                <p><span className="code-muted">05</span> {"};"}</p>
                <p className="code-spacer"><span className="code-muted">06</span> <span className="code-purple">return</span> <span className="code-blue">createImpact</span>();<span className="cursor">▍</span></p>
              </div>
              <div className="visual-footer"><span><BrainCircuit size={15} /> Machine Learning</span><span><FileSearch size={15} /> Intelligent Search</span></div>
            </div>
            <div className="float-chip chip-ai"><Sparkles size={16} /><span><b>Generative AI</b><small>LLMs · RAG</small></span></div>
            <div className="float-chip chip-api"><Code2 size={16} /><span><b>API Development</b><small>FastAPI · Python</small></span></div>
            <div className="visual-glow" />
          </motion.div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <Reveal><div className="section-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious mind. <span className="gradient-text">Practical builder.</span></h2></div></Reveal>
          <div className="about-grid">
            <Reveal className="about-text"><p>I’m an AI/ML developer interested in building applications that make complex technology easier to use. My work spans machine learning, NLP, LLM-powered workflows, retrieval-augmented generation, and backend API development.</p><p>I enjoy taking a problem from an initial idea to a working prototype—organizing data, connecting services, testing the workflow, and making the experience clear for users.</p><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></Reveal>
            <Reveal delay={0.1} className="stats-grid">
              <div className="stat-card"><span className="stat-icon"><BrainCircuit size={19} /></span><strong>AI/ML</strong><span>Core focus</span></div>
              <div className="stat-card"><span className="stat-icon"><Workflow size={19} /></span><strong>End-to-end</strong><span>Project mindset</span></div>
              <div className="stat-card"><span className="stat-icon"><Database size={19} /></span><strong>Data + APIs</strong><span>Connected systems</span></div>
              <div className="stat-card"><span className="stat-icon"><Sparkles size={19} /></span><strong>Always learning</strong><span>Curiosity in action</span></div>
            </Reveal>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <Reveal><div className="section-heading"><p className="eyebrow">WHAT I WORK WITH</p><h2>Skills & <span className="gradient-text">toolkit.</span></h2><p className="section-subtitle">The tools I use to turn data and ideas into working applications.</p></div></Reveal>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return <Reveal key={skill.title} delay={i * 0.07} className="skill-card"><div className="skill-icon"><Icon size={21} /></div><h3>{skill.title}</h3><div className="skill-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div></Reveal>;
            })}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <Reveal><div className="projects-heading"><div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Projects with <span className="gradient-text">purpose.</span></h2><p className="section-subtitle">A selection of AI, data, and full-stack project work.</p></div><span className="project-count">04 PROJECTS <span>↘</span></span></div></Reveal>
          <div className="projects-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <Reveal key={project.number} delay={i * 0.06} className={`project-card ${project.accent}`}><div className="project-top"><span className="project-number">{project.number} / 04</span><span className="project-icon"><Icon size={23} /></span></div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom"><span>Project overview</span><ArrowUpRight size={17} /></div></Reveal>;
            })}
          </div>
          <p className="project-note">Project descriptions are editable starter content. Add your live demos and repository links before publishing.</p>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <Reveal className="contact-panel"><div className="contact-orb" /><p className="eyebrow">LET'S BUILD SOMETHING</p><h2>Have an idea? Let's make it <span className="gradient-text">real.</span></h2><p className="contact-copy">I’m interested in AI/ML opportunities, meaningful projects, and connecting with people who like solving problems.</p><div className="contact-actions"><a className="button button-primary" href="mailto:your.email@example.com"><Mail size={16} /> Email me <ArrowUpRight size={16} /></a><a className="button button-ghost" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ExternalLink size={14} /></a><a className="button button-ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ExternalLink size={14} /></a></div></Reveal></section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">M</span><span>Portfolio<span className="brand-dot">.</span></span></a><span>Designed with care · Built with React</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);