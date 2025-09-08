// Configuración centralizada de redes sociales
// ⚠️ IMPORTANTE: Actualizar estas URLs con tus perfiles reales

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/529984817174',
  instagram: 'https://www.instagram.com/direct/inbox/', // Abre la bandeja de mensajes de Instagram
  outlook: 'mailto:oscarbarahona0793@outlook.com',     // Email/Outlook
  telegram: 'tg://resolve?domain=arahona1993',
  facebook: 'https://m.me/oscar.palma.580153?ref=bookmarks'    // Abre Messenger para iniciar conversación
};

// Validar que las URLs no sean placeholders
export const validateSocialLinks = () => {
  const invalidLinks = Object.entries(SOCIAL_LINKS)
    .filter(([platform, url]) => url.includes('tu_usuario_real'))
    .map(([platform]) => platform);
  
  if (invalidLinks.length > 0) {
    console.warn('⚠️ URLs de redes sociales no configuradas:', invalidLinks.join(', '));
    console.warn('Actualiza src/config/socialLinks.js con tus URLs reales');
  }
  
  return invalidLinks.length === 0;
};

// Verificar en desarrollo
if (import.meta.env.DEV) {
  validateSocialLinks();
}




