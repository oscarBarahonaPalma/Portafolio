import '../Estilos/Presentacion.css';
import { useNavigate } from 'react-router-dom';

function Presentacion() {
  const navigate = useNavigate();

  return (
    <div>
      <p className='parrafo'>
        Soy Oscar Barahona Palma, Desarrollador Front End Junior con experiencia en React, HTML, CSS y JavaScript. Me especializo en crear interfaces limpias, modernas y responsivas, adaptadas a cualquier dispositivo, priorizando la usabilidad, el rendimiento y la experiencia del usuario.
      </p>

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
  );
}

export default Presentacion;
