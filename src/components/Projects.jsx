import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const projectList = [
    {
      title: "Aulab Post — Full-Stack Blog Platform",
      shortDescription: "Piattaforma di blogging full-stack sviluppata in Laravel con gestione multi-ruolo (Admin, Revisore, Redattore) e workflow di approvazione.",
      overview: "Una web application completa per la gestione di un blog multi-utente, sviluppata per replicare un ecosistema editoriale reale con flussi di lavoro avanzati e ruoli differenziati. Il progetto gestisce l'intero ciclo di vita di un articolo: dalla stesura in bozza fino alla revisione e pubblicazione approvata.",
      features: [
        "Architettura Multi-Ruolo: Gestione dei permessi basata su ruoli specifici (Utente Standard, Redattore, Revisore, Amministratore) protetti da middleware dedicati.",
        "Flusso di Approvazione (Workflow Editoriale): I redattori creano e modificano gli articoli che entrano in una coda di attesa; i revisori possono accettarli o rifiutarli prima della pubblicazione.",
        "Form 'Lavora con noi': Sistema di candidatura integrato per richiedere l'assegnazione di ruoli editoriali, con notifiche tracciate.",
        "Gestione Dinamica di Categorie e Tag: Associazione flessibile dei contenuti e sistema di ricerca avanzata.",
        "Upload e Validazione Immagini: Gestione sicura dei file multimediali e sincronizzazione tramite storage link."
      ],
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "Vite"],
      image: "/aulab-post.gif",
      githubLink: "https://github.com/Frapatr/The_Aulab_Post"
    },
    {
      title: "Air Quality Dashboard — Monitoring Application",
      shortDescription: "Applicazione web full-stack per il monitoraggio dei dati ambientali con backend in Flask e interfaccia reattiva in Nuxt/Vue.",
      overview: "Applicazione web full-stack sviluppata come assessment di recruitment tecnico, progettata per il monitoraggio in tempo reale e la visualizzazione analitica dei dati sulla qualità dell'aria attraverso un'architettura disaccoppiata e sicura.",
      features: [
        "Backend Proxy in Flask: Sviluppo di endpoint dedicati in Python e Flask per interrogare in modo sicuro le API esterne di monitoraggio, gestendo intestazioni e validazione.",
        "Interfaccia Reattiva in Nuxt/Vue: Costruzione di componenti frontend dinamici e moderni per la consultazione fluida di metriche e indicatori di inquinamento.",
        "Gestione Robusta delle Risposte: Gestione avanzata dei codici di stato HTTP, dei timeout e delle eccezioni di rete lato server per garantire stabilità."
      ],
      tech: ["Python", "Flask", "Nuxt.js", "Vue.js"],
      image: "/air-quality.gif",
      githubLink: "https://github.com/tuonome/repository-air-quality"
    }
  ];

  return (
    <section id="progetti" className="projects-section">
      <h2>I miei <span className="highlight-blue">Progetti</span></h2>
      
      <div className="projects-grid">
        {projectList.map((project, index) => {
          const isExpanded = expandedIndices.includes(index);

          return (
            <div key={index} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-preview-img" />
                </div>
              )}
              
              <div className="project-content-wrapper">
                <h3>{project.title}</h3>
                
                <p className="project-desc">
                  {project.shortDescription}
                </p>

                <div className={`project-extended-content ${isExpanded ? 'show' : ''}`}>
                  <p className="project-overview">{project.overview}</p>
                  <h4 className="features-title">Funzionalità Principali:</h4>
                  <ul className="features-list">
                    {project.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => toggleExpand(index)} 
                  className="toggle-desc-btn"
                >
                  {isExpanded ? "Mostra meno ▲" : "Leggi di più ▼"}
                </button>
                
                <div className="tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      Codice (GitHub) ➔
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;