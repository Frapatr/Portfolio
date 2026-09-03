import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Sviluppo Web Full-Stack",
      skills: ["PHP", "Laravel", "JavaScript (ES6+)", "React", "Vue.js", "Nuxt.js", "Python", "Flask", "Supabase", "HTML5 / CSS3", "Bootstrap", "Vite", "REST API"]
    },
    {
      title: "IT Support, Reti & Sistemi",
      skills: ["Help Desk & Troubleshooting", "Amministrazione Windows", "Network Diagnostics (IPConfig, Ping, Tracert)", "Git & GitHub", "Database MySQL", "XAMPP / Storage Management"]
    },
    {
      title: "Amministrazione & Gestione Operativa",
      skills: ["Amministrazione e Finanza", "Gestione Logistica e Magazzino", "Controllo Qualità", "Gestione Documentale", "Procedure Operative"]
    },
    {
      title: "Competenze Trasversali (Soft Skills)",
      skills: ["Problem Solving", "Precisione e Rigore", "Teamworking e Collaborazione", "Gestione dello Stress", "Adattabilità e Flessibilità"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Le mie <span className="highlight-blue">Competenze</span></h2>
        <p className="skills-subtitle">Un quadro completo che unisce lo sviluppo software avanzato, il supporto IT e un solido background amministrativo e gestionale.</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;