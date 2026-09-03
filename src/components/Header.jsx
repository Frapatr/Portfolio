import './Header.css';
import profileImg from '../assets/fra.jpg';

function Header() {
  return (
    <header className="portfolio-header">
      <div className="header-container">
        
        <div className="profile-img-container">
          <img src={profileImg} alt="Francesco Patrizio" className="profile-img" />
        </div>

        <div className="header-content">
          <span className="header-badge">Full-Stack Developer & IT Support</span>
          <h1>
            Ciao <span className="highlight-blue">Francesco Patrizio</span>
          </h1>
          <p className="header-bio">
            Con un percorso professionale orientato alla concretezza e al problem-solving, unisco una solida base amministrativa ed economica — consolidata dal diploma in Amministrazione, Finanza e Marketing — a un'ampia esperienza sul campo maturata nella logistica, nel controllo qualità e nella gestione operativa. Questa attitudine al rigore e all'organizzazione si è evoluta naturalmente verso l'Information Technology. Oggi, grazie a percorsi di alta formazione specialistica come il training Full-Stack Developer con Aulab e la preparazione tecnica in ambito IT Help Desk tramite FormaTemp e ITConsulting, progetto e sviluppo applicazioni web scalabili, unendo competenze di backend e frontend con tecnologie come Laravel, React, PHP e Python.
          </p>
          <div className="header-actions">
            <a href="#progetti" className="btn-primary">Esplora i Progetti</a>
            <a href="#skills" className="btn-secondary">Competenze</a>
            <a href="#contatti" className="btn-secondary">Contattami</a>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;