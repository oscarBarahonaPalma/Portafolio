// Letras_Animacion.jsx
import { useState, useEffect, useRef } from 'react';
import '../Estilos/Letras_Animacion.css';
import { useNavigate } from 'react-router-dom';

function Letras_Animacion() {
  const navigate = useNavigate();
  const prefijo = 'Desarrollador ';
  const animado = 'Front End';
  const [contenido, setContenido] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const contRef = useRef(null);

  useEffect(() => {
    // ANCHO FIJO PARA EVITAR MOVIMIENTOS - El contenedor siempre tiene el mismo ancho
    if (contRef.current) {
      const anchoTotal = Math.max(prefijo.length + animado.length + 2, 25); // Mínimo 25 caracteres
      contRef.current.style.width = `${anchoTotal}ch`;
      contRef.current.style.minWidth = `${anchoTotal}ch`;
      contRef.current.style.maxWidth = `${anchoTotal}ch`;
    }

    let timeout;
    if (!isDeleting) {
      // Fase de escritura
      if (contenido.length < animado.length) {
        timeout = setTimeout(() => {
          const nuevoContenido = animado.slice(0, contenido.length + 1);
          setContenido(nuevoContenido);
        }, 150);
      } else {
        // palabra completa, esperamos antes de borrar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      // Fase de borrado - de derecha a izquierda
      if (contenido.length > 0) {
        timeout = setTimeout(() => {
          setContenido(prev => prev.slice(0, -1));
        }, 100);
      } else {
        // ya borró todo; volvemos a escribir
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [contenido, isDeleting, animado, prefijo]);

  return (
    <div className="texto-animado-container">
      {/* Contenedor principal con fondo borroso tipo cristal */}
      <div className="contenido-cristal">
        {/* Saludo estático arriba */}
        <div className="saludo">
          <h2>Hola soy Oscar</h2>
        </div>

        {/* Texto animado - ESPACIO FIJO PARA FRONT END */}
        <div className="texto-animado-contenedor" ref={contRef}>
          <span className="texto-prefijo-estatico">{prefijo}</span>
          <span className="espacio-fijo-front-end">
            <span className="texto-animado">{contenido}</span>
            <span className="cursor">|</span>
          </span>
        </div>

        {/* Párrafo de presentación */}
        <div className="parrafo">
          <p className="intro-text">
            Soy <span className="intro-text__name">Oscar Barahona Palma</span>,
            <span className="intro-text__role"> Desarrollador Front End Junior</span> con experiencia en React, HTML, CSS y JavaScript. Me especializo en crear interfaces limpias, modernas y responsivas, adaptadas a cualquier dispositivo, priorizando la usabilidad, el rendimiento y la experiencia del usuario.
          </p>
        </div>

        {/* Botones */}
        <nav className='botones'>
          <a
            href="/OSCAR%20BARAHONA%20PALMA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="Boton_CV"
          >
            CV
          </a>
          <button
            className='Boton_Mas'
            onClick={() => navigate('/Sobre_Mi')}
          >
            Saber Más...
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Letras_Animacion;
