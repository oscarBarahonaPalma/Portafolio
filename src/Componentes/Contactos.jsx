import '../Estilos/Contactos.css';
import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '../config/socialLinks';
import { buildWhatsAppLink } from '../utils/whatsapp';

function Contactos({ className = '' }) {
  const wrapperClass = `contactos-wrapper${className ? ' ' + className : ''}`;
  
  const handleSocialClick = (platform, url) => {
    // Validar que la URL no sea placeholder antes de abrir
    if (url.includes('tu_usuario_real')) {
      console.warn(`⚠️ URL de ${platform} no configurada. Actualiza src/config/socialLinks.js`);
      return false;
    }
    return true;
  };

  return (
    <div className={wrapperClass}>
      <div>
       {/* WhatsApp */}
        <a 
          href={buildWhatsAppLink('529984817174', 'Gracias por ver mi portafolio y por ponerte en contacto conmigo. Te responderé lo más pronto posible. 🙃')} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => !handleSocialClick('WhatsApp', 'custom://whatsapp') && e.preventDefault()}
        >
          <button className="button whatsapp" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.2 283.2 32 224.1 32c-130.1 0-235.9 105.9-235.9 
              236 0 41.6 10.8 82.1 31.3 118l-33.1 99.2 102-32.8c34.1 18.7 
              72.4 28.6 111.6 28.6h.1c130.1 0 235.9-105.9 
              235.9-236 0-59.2-23.2-114.9-65.1-157.9zM224.1 
              438.6c-33.1 0-65.5-8.9-93.8-25.7l-6.7-4-60.6 
              19.5 19.8-58.6-4.3-6.7c-19.5-30.5-29.8-65.7-29.8-102C48.6 
              142.8 127.9 63.5 224.1 63.5c48.3 0 93.6 18.8 
              127.7 52.9 34.1 34.1 52.9 79.4 52.9 
              127.7 0 96.2-79.3 174.5-180.6 
              174.5zm101.4-138.2c-5.5-2.8-32.6-16.1-37.7-17.9-5.1-1.9-8.8-2.8-12.5 
              2.8s-14.4 17.9-17.6 21.6c-3.2 3.7-6.5 4.2-12 
              1.4-32.7-16.4-54.2-29.3-75.5-66.2-5.7-9.8 5.7-9.1 
              16.4-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.1-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 
              1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 
              46.3s19.9 53.7 22.6 57.4c2.8 3.7 38.9 59.4 94.2 
              83.2 35 15.1 48.7 16.4 66.3 13.8 10.7-1.6 
              32.6-13.3 37.2-26.1 4.6-12.8 4.6-23.7 3.2-26.1-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </button>
        </a>

        {/* Instagram */}
        <a 
          href={SOCIAL_LINKS.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => !handleSocialClick('Instagram', SOCIAL_LINKS.instagram) && e.preventDefault()}
        >
          <button className="button instagram" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
            </svg>
          </button>
        </a>

        {/* Outlook/Email - Abre cliente de email para nuevo mensaje */}
        <a
          href={SOCIAL_LINKS.outlook}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => !handleSocialClick('Outlook', SOCIAL_LINKS.outlook) && e.preventDefault()}
        >
          <button className="button outlook" title="Enviar Email">
            <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </a>

       {/* Telegram */}
        <a 
          href={SOCIAL_LINKS.telegram} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => !handleSocialClick('Telegram', SOCIAL_LINKS.telegram) && e.preventDefault()}
        >
          <button className="button telegram" title="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 496 512" fill="currentColor">
              <path d="M248,8C111.033,8,0,119.033,0,256s111.033,248,248,248s248-111.033,248-248S384.967,8,248,8z 
        M370.9,165.7L322.2,363.2c-4.1,16.4-15.1,20.5-30.5,12.8l-84.3-62.2l-40.7,39.2
        c-4.5,4.5-8.3,8.3-17,8.3l6.1-86.5l157.8-142.4c6.9-6.1-1.5-9.5-10.7-3.4L131.5,264.3l-83.6-26.1c-18.2-5.7-18.5-18.2
        3.8-27.1l326.5-125.9C364.3,78.4,379.4,91.7,370.9,165.7z"/>
            </svg>
          </button>
        </a>

        {/* Facebook */}
        <a 
          href={SOCIAL_LINKS.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => !handleSocialClick('Facebook', SOCIAL_LINKS.facebook) && e.preventDefault()}
        >
          <button className="button facebook" title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0C141.09 0 
      89.53 54.42 89.53 153.19V195.3H0v92.7h89.53V512h107.8V288z"/>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

Contactos.propTypes = {
  className: PropTypes.string,
};

export default Contactos;
