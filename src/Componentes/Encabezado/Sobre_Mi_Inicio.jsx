// AnimatedAboutMe.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import '../../Estilos/Sobre_Mi_Inicio.css';

const AnimatedAboutMe = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const skills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Responsive Design'];

  // Estado para la máquina de escribir
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(15);

  // Frases para la animación de máquina de escribir
  const phrases = [
    'Especializado en Git...',
    'Especializado en React...',
    'Especializado en JavaScript...',
    'Especializado en HTML5...',
    'Especializado en CSS3...',
    'Especializado en Diseño Responsivo...'
  ];

  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Lógica de máquina de escribir
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Fase de escritura
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          setTypingSpeed(15); // Velocidad ultra rápida
        } else {
          // Frase completa, esperar antes de borrar
          setTimeout(() => setIsDeleting(true), 150);
          return;
        }
      } else {
        // Fase de borrado - de derecha a izquierda (como describe el usuario)
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          setTypingSpeed(8); // Velocidad de borrado ultra rápida
        } else {
          // Frase completamente borrada, pasar a la siguiente
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
          return;
        }
      }

      // Programar la siguiente iteración
      timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    };

    // Iniciar la animación después de un pequeño delay inicial
    const initialDelay = setTimeout(() => {
      timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    }, 200); // Esperar 0.2 segundos antes de comenzar

    return () => {
      clearTimeout(initialDelay);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  // Limpiar timeout al desmontar componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`animated-about-me-wrapper${isVisible ? ' visible' : ''}`}>
      <div className="container">
        <div className="left-section">
          <div className="greeting">¡Hola! Soy</div>
          <h1 className="name">
            Oscar Barahona<br />Palma
          </h1>
          <div className="role">Desarrollador Frontend Junior</div>

          {/* Máquina de escribir animada */}
          <div className="typewriter-container">
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

        </div>
        <div className="right-section">
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-bar" style={{ '--delay': `${idx * 0.1}s` }}>
                <div className="skill-name">{skill}</div>
              </div>
            ))}
          </div>
          <p className="description">
            Soy un desarrollador frontend apasionado por crear experiencias web modernas y funcionales.
          </p>
          <div className="cta-section">
            <a
              className="cta-button"
              href={buildWhatsAppLink('529984817174', 'Gracias por ver mi portafolio y por ponerte en contacto conmigo. Te responderé lo más pronto posible. 🙃')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctame
            </a>
            <button className="cta-button cta-outline" onClick={() => navigate('/Proyectos')}>
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAboutMe;
