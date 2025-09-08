import '../Estilos/Cuerpo.css';
import Contactos from './Contactos';
import Letras_Animacion from './Letras_Animacion';

export default function Cuerpo() {
  return (
    <div className='cuerpo'>
      <div className='imagen_letra'>
        <img className='imagen_perfil' src="/imagenes/Perfil.png" alt="Perfil" />
        {/* Redes bajo la foto en desktop */}
        <div className='redes-sociales-container'>
          <Contactos />
        </div>
      </div>
      
      {/* Redes sociales entre imagen y contenido (solo en móviles) */}
      <div className='redes-sociales-container'>
        <Contactos />
      </div>

      <div className='presentacion-contacto'>
        <Letras_Animacion />
      </div>
    </div>
  );
}
