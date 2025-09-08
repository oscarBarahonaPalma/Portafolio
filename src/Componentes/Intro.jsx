import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Estilos/Intro.css';

function Intro({ onFinish }) {
  const [text, setText] = useState('');
  const [desapareciendo, setDesapareciendo] = useState(false);
  const mensaje = 'Hola, Bienvenido a mi Portafolio';

  useEffect(() => {
    let currentText = '';
    let index = 0;

    let typingInterval;
    let timeout;
    let fadeTimeout;

    typingInterval = setInterval(() => {
      if (index < mensaje.length) {
        currentText += mensaje[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    timeout = setTimeout(() => {
      setDesapareciendo(true);
      fadeTimeout = setTimeout(() => {
        onFinish();
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
      clearTimeout(fadeTimeout);
    };
  }, [onFinish]);

  return (
    <div className={`intro-container ${desapareciendo ? 'fade-out' : ''}`}>
      <h1 className="glitch-text">{text}</h1>
    </div>
  );
}

Intro.propTypes = {
  onFinish: PropTypes.func.isRequired
};

export default Intro;
