import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contatti" className="contact-section">
      <div className="container">
        <h2>Mettiamoci in <span className="highlight-blue">Contatto</span></h2>
        <p className="contact-text">
          Sono attualmente alla ricerca di opportunità stimolanti come Full-Stack Developer o in ambito IT Support. Se vuoi discutere di un progetto o fare due chiacchiere sulle mie competenze, puoi scrivermi direttamente tramite il form o via social.
        </p>

        <div className="contact-links">
          <button onClick={handleToggleForm} className="contact-card-link email-toggle-btn">
            <span className="contact-icon">📧</span>
            <span>{isFormOpen ? "Chiudi Form" : "Scrivimi un Messaggio"}</span>
          </button>
          <a href="https://www.linkedin.com/in/francesco-patrizio-91b05433b/" target="_blank" rel="noopener noreferrer" className="contact-card-link">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Frapatr" target="_blank" rel="noopener noreferrer" className="contact-card-link">
            <span className="contact-icon">💻</span>
            <span>GitHub</span>
          </a>
        </div>

        {isFormOpen && (
          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success-message">
                <p>✨ Grazie per il messaggio! Ti risponderò al più presto.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Invia un altro messaggio</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Il tuo Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Es. Mario Rossi"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">La tua Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="nome@esempio.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Scrivi qui il tuo messaggio..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit-btn">Invia Messaggio</button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;